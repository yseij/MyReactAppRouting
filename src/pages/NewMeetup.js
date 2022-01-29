import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  function onAddMeetup(meetupData) {
    fetch(
      "https://react-beef5-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
              'Content-Type' : 'application/json'
          }
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>
  );
}

export default NewMeetupsPage;
