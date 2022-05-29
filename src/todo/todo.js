import React, { useEffect, useState } from "react";
import PageHeader from "../template/Pageheader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import axios from "axios";;

const URL = "http://localhost:3003/api/todoapp";

function Todo(props) {
    const [useDescription, setDescription] = useState("");
    const [useListDescription, setListDescription] = useState([]);

    useEffect(() => {
        refresh();
    }, []);

    const refresh = (description = '') => {
        const search = description ? `?description=${description}` : '';
        fetch(URL + search, {
            method : "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
        }).then(response => {
            response.json().then((data) => {
                setListDescription(data.todos);
                setDescription(description);
            });
        });
    }

    const handleSearch = () => {
        refresh(useDescription);
    }

    const handleClear = () => {
        refresh();
    }

    const handleAdd = () => {
        const description = useDescription;

        if (description === '') {
            return;
        }

        fetch(URL, {
            method : "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams({
                'name': description
            })
        })
        .then(response => {
            refresh()
        }) 
    }

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleRemove = (todo) => {
        fetch(URL + "/" + todo.id_todo, {
            method : "DELETE",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
        .then(response => {
            refresh(useDescription)
        }) 
    }

    const handleMarkDone = (todo) => {
        fetch(URL + "/" + todo.id_todo, {
            method : "PUT",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams({
                'status': true
            })
        })
        .then(response => {
            refresh(useDescription)
        }) 
    }

    const handleMarkAsPending = (todo) => {
        fetch(URL + "/" + todo.id_todo, {
            method : "PUT",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams({
                'status': false
            })
        })
        .then(response => {
            refresh(useDescription)
        }) 
    }

    return (
        <div>
            <PageHeader name="Tasks" small="Registration"></PageHeader>
            <TodoForm description={useDescription} 
            handleChange={handleChange}
            handleAdd={handleAdd}
            handleSearch={handleSearch}
            handleClear={handleClear}/>
            <TodoList list={useListDescription} 
                handleRemove={handleRemove}
                handleMarkDone={handleMarkDone}
                handleMarkAsPending={handleMarkAsPending}/>
        </div>
    )
    
}

export default Todo
