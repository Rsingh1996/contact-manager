import "../App.css";
import DeleteIcon from "@mui/icons-material/Delete";

export const ContactList = (props) => {
  const { contact, removeContact } = props;

  console.log("from contactList", contact);
  return (
    <div className="contact-list">
      {/* <h2>ContactList</h2> */}
      {contact.map((val) => {
        return (
          <div key={val.id} className="contact">
            <div>{val.data.name}</div>
            <div>{val.data.email}</div>
            <span onClick={() => removeContact(val.id)}>
              <DeleteIcon />
            </span>
          </div>
        );
      })}
    </div>
  );
};
