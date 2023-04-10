import "./UpdateValueModal.css";

const UpdateValueModal = ({ status, value, setValue, onSubmit }) => {
  return (
    <>
      <div className={status ? "back-drop" : "hidden"}></div>
      <div className={status ? "modal" : "hidden"}>
        <div className="modal-content">
          <form onSubmit={onSubmit}>
            <div className="title-Modal">
              <h2>New Value:</h2>
            </div>
            <div className="userInput">
              <input
                type="text"
                value={value}
                placeholder="New Value ..."
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="btn-box">
              <button className="updateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateValueModal;
