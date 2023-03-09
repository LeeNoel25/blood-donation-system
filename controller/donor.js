const Donor = require("../models/Donor"); // connect to model
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

function newDonor(req, res) {
  res.render("donors/new");
}

const create = (req, res) => {
  req.body.name = req.body.name.trim();
  const donor = new Donor(req.body);
  donor.save().then(function (savedDonor, err) {
    if (err) return res.redirect("/donors/new");
    console.log(savedDonor);
    res.redirect("/donor");
    // res.send("from create");
  });
};

const index = (req, res) => {
  Donor.find()
    .exec()
    .then((donor) => {
      const context = { donor };
      res.render("donors/index", context);
    });
};

const deleteDonor = (req, res) => {
  const { id } = req.params;
  Donor.findByIdAndDelete(id)
    .exec()
    .then((donor) => {
      res.redirect("/donor");
    });
};

const update = (req, res) => {
  const { id } = req.params;
  Donor.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((donor) => {
      res.redirect("/donors");
    });
};

// const edit = (req, res) => {
//   const { id } = req.params;
//     const e =
//   `<select name="mpaaRating" value="PG">
//       <option value="G">G</option>
//       <option value="PG" selected>PG</option>
//       <option value="PG-13">PG-13</option>
//       <option value="R">R</option>
//     </select>`;
//   Donor.findById(id)
//     .exec()
//     .then((donor) => {
//       const context = { id, donor, e };
//       res.render("donors/edit.ejs", context);
//     });
// };

module.exports = {
  create,
  index,
  delete: deleteDonor,
  new: newDonor,
  update,
  //   edit
};
