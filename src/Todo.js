import React, { useState} from "react";
import { InputBase, ListItem, ListItemText, Checkbox } from "@mui/material";


const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    
    return (
        <ListItem>
            <Checkbox checked={item.done}/>
            <ListItemText>
                <InputBase
                  inputProps={{"aria-label":"naked"}}
                  type="text"
                  id={item.id}
                  name={item.id}
                  value={item.title}
                  multiline={true}
                  fillwidth={true}
                  />
            </ListItemText>
        </ListItem>
    );
};

export default Todo;