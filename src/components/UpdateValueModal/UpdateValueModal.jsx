import "./UpdateValueModal.css";

const UpdateValueModal = ({
  status,
  setStatus,
  value,
  setValue,
  descValue,
  setDescValue,
  onSubmit,
}) => {
  return (
    <>
      <div
        className={status ? "back-drop" : "hidden"}
        onClick={() => setStatus(false)}
      ></div>
      <div className={status ? "modal" : "hidden"}>
        <div className="modal-content">
          <form onSubmit={onSubmit}>
            <div className="title-Modal">
              <h2>New Title:</h2>
            </div>
            <div className="userInput">
              <input
                type="text"
                value={value}
                placeholder="New Title ..."
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="title-Modal">
              <h2>New Description:</h2>
            </div>
            <div className="userInput">
              <input
                type="text"
                value={descValue}
                placeholder="New Description ..."
                onChange={(e) => setDescValue(e.target.value)}
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
