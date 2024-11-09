import React from 'react'
import { useForm } from 'react-hook-form';
import TextInput from '../../general/TextInput';
import Button from '../../general/Button';
import axios from 'axios'
import { useState } from 'react';
import Nav from '../../general/Nav';
import { redirect } from 'react-router-dom';
import Title from '../../general/Title';

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
          <div id="title" className='flex place-items-center justify-center my-4'>
            <h1 className='font-bold p-4 bg-green-500 border-green-700 text-green-900'>Libro agregado con éxito</h1>
          </div>
        ) : undefined
      }

      {
        (somethingWrong) ? (
          (
            <div id="title" className='flex place-items-center justify-center my-4'>
              <h1 className='font-bold p-4 bg-red-500 border-red-700 text-red-900'>{errorMessage}</h1>
            </div>
          )
        ) : undefined
      }
      
      <div id="form">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div id="file">
            <input type="file" name="Book Cover" id='cover' className='my-4' />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div id='col1'>          
              <TextInput 
                name={'title'}
                placeholder={'Title'}
                register={register}
                additional={{required: true, pattern: /\w+/}}
                w={'35vw'}
              />
            </div>
            <div id='col2'>
            <TextInput 
                name={'author'}
                placeholder={'Author'}
                register={register}
                additional={{required: true, pattern: /\w+/}}
                w={'35vw'}
              />
            </div>

          </div>
          <div id="col3" className='pt-5 w-[74.8vw]'>
          <TextInput 
              name={'description'}
              placeholder={'Description'}
              additional={{required: false}}
              register={register}
            />

            </div>
          <div id="form" className='grid grid-cols-2 gap-5 my-5'>
            <TextInput 
                name={'short_title'}
                placeholder={'Short Title'}
                register={register}
                additional={{required: false}}
                w={'35vw'}
              />
            <TextInput 
              name={'doi'}
              placeholder={'DOI'}
              additional={{required: false}}
              register={register}
              w={'35vw'}
            />
          </div>

          <div id="row" className='grid grid-cols-2 gap-5'>
              <TextInput 
                name={'page_count'}
                placeholder={'Page count'}
                register={register}
                additional={{required: false, pattern: /\d/}}
                w={'35vw'}
                />

              <TextInput
                name={'keywords'}
                placeholder={'Keywords'}
                register={register}
                additional={{required: false, pattern: /[\w\s,]/}}
                w={'35vw'}
                />
              
              <TextInput
                name={'isbn'}
                placeholder={'isbn'}
                register={register}
                additional={{required: false}}
                w={'35vw'}
                />
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
