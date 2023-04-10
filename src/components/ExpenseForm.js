import React from "react";
import { MdSend } from "react-icons/md";
const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">Gasto</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="ejemplo alquiler"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Monto gastado</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="ejemplo 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "editar" : "Cargar"}
        {/* submit  */}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
