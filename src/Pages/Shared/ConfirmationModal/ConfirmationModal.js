import React from 'react';

const ConfirmationModal = ({ title, message , closeModal , successAction , modalData}) => {
    return (
        <div>
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label onClick={closeModal} htmlFor="confirmationModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData._id)} htmlFor="confirmationModal" className="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;