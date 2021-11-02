import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addservice.css';

const Addservice = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://aqueous-waters-98285.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    }

    return (
        <div className="add-service mt-5 mb-5">
            <h2>Add a service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mx-1" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input className="mx-1" {...register("description")} placeholder="description" />
                <input className="mx-1" {...register("img")} placeholder="img url" />
                <input className="btn-info mx-2" type="submit" />
            </form>
        </div>
    );
};

export default Addservice;