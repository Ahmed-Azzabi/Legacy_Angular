import Support from "../models/support.js";
//Read all tickets
export const getAllTickets = function (req, res) {
  Support.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: "no tickets found", error: err.message });
    });
};
//Add a ticket
export const addTicket = function (req, res) {
  console.log(req.body);
  Support.create(req.body)
    .then((data) =>
      res.status(201).json({ message: "ticket successfully sent", data })
    )
    .catch((err) => {
      res
        .status(400)
        .json({ message: "failed sending ticket", error: err.message });
    });
};
//Delete a ticket
export const deleteTicket = function (req, res) {
  Support.findByIdAndDelete(req.params._id)
    .then((data) => res.json({ message: "Ticket deleted successfully", data }))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Ticket doesn't exist", error: err.message })
    );
};
