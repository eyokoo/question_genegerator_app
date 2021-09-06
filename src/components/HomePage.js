import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "auto",
    padding: 50,
    width: 500,
  },
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

const RandomQuestion = (props) => {
  const classes = useStyles();
  const [category, setCategory] = useState({ category_id: "" })

  const handleInputChanges = (event) => {
    const { name, value } = event.target; //I DONT UNDERSTAND WHY IM USING "VALUE" HERE

    setCategory((previousCategory) => ({
      ...previousCategory,
      [name]: value,
    }));
  }

  const handleClick = () => { //when handleClick is run it will generate a random question
    console.log("you clicked the button to call handleClick")
    if(!category){
      props.loadRandomQuestion()
    }else{
      props.questionsArray.filter((question) => question.category_id == category)
    }
  }



  return (
    <Paper className={classes.paper} >
      <div className={classes.root}>
        {props.randomQuestion.question}
      </div>
      <TextField
        select
        name="category_id"
        label="Category"
        value={category.category_id}
        onChange={handleInputChanges}
        helperText="Please select your category"
      >

        {props.categoriesArray.map((category) => ( //whatever name i provide in my smart component/conatainer is what i should use here
          <MenuItem key={category.id} value={category.id}>
            {category.category}
          </MenuItem>
        ))}
      </TextField>
      <div></div>
      <Button variant="contained" color="secondary" onClick={handleClick} >
        BREW QUESTION
    </Button>

    </Paper>
  );
}

export default RandomQuestion;
