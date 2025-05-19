import { useStoreContext } from "../context/user";
import "./SettingsView.css";

function SettingsView() {
    const { email, firstName, lastName, choices, setChoices, setFirstName, setLastName } = useStoreContext();

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <div className="first-name-display">
                <h2>First Name</h2>
                <p>{firstName}</p>
                <h2 >Change First Name</h2>
                <input
                    type="text"
                    value={setFirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter new first name"
                />
            </div>
            <div className="last-name-display">
                <h2>Last Name</h2>
                <p>{lastName}</p>
                <h2>Change Last Name</h2>
                <input
                    type="text"
                    value={setLastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter new last name"
                />
            </div>
            <div className="email-display">
                <h2>Email</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default SettingsView;