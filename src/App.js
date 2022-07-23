import classes from './App.module.css'

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.flagContainer}>
        <div className={classes.stripWhite}></div>
        <div className={classes.stripBlue}></div>
        <div className={classes.stripRed}></div>
      </div>
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          Слава России
        </div>
      </div>
    </div>
  );
}

export default App;
