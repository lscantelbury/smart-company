import './App.css';
import { Header } from './components/Header/Header';
import { makeStyles } from '@material-ui/core';
import { Body } from './components/Body/Body';

const useStyles = makeStyles({
  root: {
    backgroundImage: "url(https://i.pinimg.com/originals/1b/83/dc/1b83dce6c2a59c92d2dfdd14df85c377.gif)",
    display: "grid",
    gridTemplateRows: "60px 100vh",
    gridTemplateColumns: "1fr 2fr 1fr",
  },
  header: {
    gridRow: "1",
    gridColumn: "1/4",
  },
  body: {
    gridRow: "2",
    gridColumn: "2",
  }
})
function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>

    <Header className={classes.header}/>
    <Body className={classes.body} />
    </div>
  );
}

export default App;
