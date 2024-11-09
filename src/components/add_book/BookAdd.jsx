import React from 'react'
import { useForm } from 'react-hook-form';
import TextInput from '../general/TextInput';
import Button from '../general/Button';
import axios from 'axios'
import { useState } from 'react';
import Nav from '../general/Nav';
import Title from '../general/Title';
import './BookAdd.css'
import Message from '../general/Message';
import FileInput from '../general/FileInput';


export default function BookAdd() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const [bookCreated, setBookCreated] = useState(false)
  const [somethingWrong, setSomethingWrong] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [coverName, setCoverName] = useState('Elija una portada.')

  const onFormSubmit = async (data) => {
    const fileInput = document.getElementById('cover')
    const file = fileInput.files[0]
    if (!file) {
      setSomethingWrong(true)
      setBookCreated(false)
      setErrorMessage('Cover image is a required field')
      return
    }
    let response = axios.post('http://localhost:8000/book/', data)
    let response_json = (await response).data
    let formData = new FormData()
    formData.append("image", file)
    let response2 = await axios.put(`http://localhost:8000/book/${response_json.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    if (response2.status == 200) {
      setBookCreated(true)
      setSomethingWrong(false)
      
    } else {
      setBookCreated(false)
      setSomethingWrong(false)
    }
    reset()
    fileInput.value = ''
  }  
  return (
    <>
      <Nav />
      <div>

      <div id="title" className='flex place-items-center justify-center my-4'>
        <Title>Agregar un libro</Title>
      </div>

      {
        (bookCreated) ? (
          <Message color='green'>
            Libro agregado con éxito
          </Message>
        ) : undefined
      }

      {
        (somethingWrong) ? (
          (
            <Message color='red'>
              {errorMessage}
            </Message>
          )
        ) : undefined
      }
      
      <div id="form">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <FileInput color='blue' initialLabel={'Elija un archivo.'} />

          <div id='grid'>
            <TextInput name={'title'} placeholder={'Title'} register={register} additional={{required: true, pattern: /\w+/}}/>
            <TextInput name={'author'} placeholder={'Author'} register={register} additional={{required: true, pattern: /\w+/}}/>
          </div>

          {/* Description */}
          <div className='mt-5'>
          <TextInput name={'description'} placeholder={'Description'} additional={{required: false}} register={register}/>
          </div>


          <div id="grid" className='my-5' >
            <TextInput name={'short_title'} placeholder={'Short Title'} register={register} additional={{required: false}}/>
            <TextInput name={'doi'} placeholder={'DOI'} additional={{required: false}} register={register}
            />
          </div>

          <div id="grid" className=''>
              <TextInput name={'page_count'} placeholder={'Page count'} register={register} additional={{required: false, pattern: /\d/}}/>

              <TextInput name={'keywords'} placeholder={'Keywords'} register={register} additional={{required: false, pattern: /[\w\s,]/}}/>

          </div>
          <div className="my-5">  
            <TextInput name={'isbn'} placeholder={'ISBN'} register={register} additional={{required: false}}/>
          </div>
          <div className='flex place-items-center justify-center my-5'>
            <Button icon={'+'} label={'Agregar libro'}/>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
