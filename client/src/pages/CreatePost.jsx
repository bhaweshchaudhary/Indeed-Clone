import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import { Box, Button, TextField, Typography, styled } from '@mui/material'
import Dropdown from '../components/Dropdown'
import { savePost } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { routePath } from '../routes/route'


const Component = styled(Box)({
    padding: '80px 200px',
    background: '#F5F5F5',
})

const Container = styled(Box)({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& > p': {
        fontSize: 35,
        fontWeight: 700,
        opacity: '.7'
    }
})

const FormWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    padding: 20,
    background: '#FFFFFF',
    borderRadius: 20,
    '& > *': {
        marginTop: '20px !important',
    }
})

const defaultObj = {
    profile: "",
    type: "",
    description: "",
    experience: "",
    technology: [],
    salary: ""
}

const options = {
    type: ["Online", "Offline"],
    experience: ["0-2 years", "3-5 years", "6-10 years", "10+ years"],
    technology: ["java", "javascript", "angular", "react", "python", "django", "Mysql", "Docker", "Postgresql", "Mongodb", "Hibernate", "Spring Boot"],
    salary: ["Rs. 0-3 LPA", "Rs. 3-5 LPA", "Rs. 5-8 LPA", "Rs. 8-12 LPA", "Rs. 12+ LPA"]
}

export default function CreatePost() {

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

    const navigate = useNavigate();

    const [data, setData] = useState(defaultObj);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const saveJob = async () => {
        await savePost(data);
        navigate(routePath.posts);
    };

  return (
    <>
    <Header />
    <Component>
        <Container>
            <Typography>Create a Job Post</Typography>
            <img src={image} alt="Create" />
        </Container>
        <FormWrapper>

            <TextField
            placeholder='Job Title'
            name='profile' 
            onChange={handleChange} />

            <Dropdown
            label="Job Type"
            id="job-type-label"
            value={data.type}
            handleChange={handleChange}
            name="type"
            options={options.type} />

            <TextField
            placeholder='Job Desc'
            name='' />

            <Dropdown 
            label="Experience"
            id="job-experience-label"
            value={data.experience}
            handleChange={handleChange}
            options={options.experience}
            name="experience"/>

            <Dropdown 
            label="Technology"
            id="job-technology-label"
            value={data.technology}
            handleChange={handleChange}
            options={options.technology}
            name="technology"
            multiple />

            <Dropdown 
            label="Salary"
            id="job-salary-label"
            value={data.salary}
            handleChange={handleChange}
            options={options.salary}
            name="salary"/>

            <Button variant='contained' onClick={() => saveJob()}>Save Job</Button>

        </FormWrapper>
    </Component>
    </>
  )
}
