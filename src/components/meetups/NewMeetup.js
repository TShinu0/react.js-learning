import Card from "../ui/Card";
import classes from './NewMeetup.module.css';

function NewMeetupForm(){
    return <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor={'title'}>MeetUp Title</label>
                <input type={'text'} required id='title'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor={'image'}>MeetUp Image</label>
                <input type={'url'} required id='image'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor={'address'}>MeetUp address</label>
                <input type={'text'} required id='address'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor={'description'}>MeetUp description</label>
                <textarea id={'description'} required rows='5'></textarea>
            </div>
            <div className={classes.action}>
                <button>Add Meetup</button>

            </div>


        </form>
    </Card>;
}
export default NewMeetupForm;