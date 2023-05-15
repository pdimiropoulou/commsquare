const db = require("../models");
const Kpi1 = db.Kpi1;
const Kpi2 = db.Kpi2;
const Op = db.Sequelize.Op;

const findKpi1 = (req, res, next) => {
  const query = req.query;

  let limit = query.limit
  ?  parseInt(query.limit) 
  : undefined;
  let start_interval = query.interval_start_timestamp
    ? query.interval_start_timestamp
    : undefined;
  let end_interval = query.interval_end_timestamp
    ?  query.interval_end_timestamp 
    : undefined;
  let service_id = req.query.service_id
    ? { service_id: req.query.service_id }
    : undefined;

  Kpi1.findAll({
    where: {
      [Op.and]: [
        service_id,
        start_interval && { interval_start_timestamp: { [Op.gte]: start_interval } },
        end_interval && { interval_end_timestamp: { [Op.lte]: end_interval } },
      ],
    },
    limit
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving records.",
      });
    });
};

const findKpi2 = (req, res, next) => {
  const query = req.query;

  let limit = query.limit
  ?  parseInt(query.limit) 
  : undefined;
  let start_interval = query.interval_start_timestamp
    ? query.interval_start_timestamp
    : undefined;
  let end_interval = query.interval_end_timestamp
    ?  query.interval_end_timestamp 
    : undefined;
    let cell_id = req.query.cell_id
    ? { cell_id: req.query.cell_id }
    : undefined;

  Kpi2.findAll({
    where: {
      [Op.and]: [
        cell_id,
        start_interval && { interval_start_timestamp: { [Op.gte]: start_interval } },
        end_interval && { interval_end_timestamp: { [Op.lte]: end_interval } },
      ],
    },
    limit
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving records.",
      });
    });
};


module.exports = { findKpi1, findKpi2 };
