const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Event RSVP</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Number of Attendees:
          <input
            type="number"
            min="1"
            required
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
          />
        </label>

        <label>
          Dietary Preferences:
          <input
            type="text"
            value={dietaryPreferences}
            onChange={(e) => setDietaryPreferences(e.target.value)}
          />
        </label>

        <label>
          Bringing Additional Guests:
          <input
            type="checkbox"
            checked={additionalGuests}
            onChange={(e) => setAdditionalGuests(e.target.checked)}
          />
        </label>

        <button type="submit">Submit RSVP</button>
      </form>

      {submitted && (
        <div>
          <h3>RSVP Submitted!</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number of attendees: {attendees}</p>
          <p>
            Dietary preferences:{" "}
            {dietaryPreferences || "None"}
          </p>
          <p>
            Bringing additional guests:{" "}
            {additionalGuests ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}