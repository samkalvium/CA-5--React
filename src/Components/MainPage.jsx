import React from 'react'
import { useEffect, useState } from 'react';
import store from '../Redux/Store';
import displayBooks from '../Redux/Action';
import { Link } from 'react-router-dom';


function MainPage() {

    const [data, setData] = useState([]);
    const [value, setValue] = useState('')

    useEffect(() => {
        store.dispatch(displayBooks())
        store.subscribe(() => {
            console.log(store.getState().data.data.books)
            setData(store.getState().data.data.books)
        });
    }, []);

    const changeInp = (e) => {
        setValue(e.target.value)
    }

    const filteredData = data.filter((item) => item.title.includes(value.toUpperCase()))

    return (
        <div>
            <nav>
                <div className='flex justify-between p-3'>
                    <Link to="/">
                        <img src='https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png' alt="" className='p-1  cursor-pointer' />
                    </Link>
                    <div>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/442/061/small/search-icon-glyph-symbol-magnifying-glass-vector.jpg" alt="search_Img" className='h-10 absolute right-12/12 top-4 ml-500 ' />
                        <input type="text" className='w-400 h-12 p-5 border rounded-md' placeholder='Search for books' value={value} onChange={changeInp} />
                    </div>
                    <div className='flex justify-between items-center '>
                        <Link to='/register'>
                            <button className='p-2 pl-10 pr-10 border rounded-md bg-red-600 text-white hover:bg-white hover:text-red-600 hover:font-bold hover:border-red-600'>Register</button>
                        </Link>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREY_ehuH_q6DZANUrW3dvLdexzJ55uvICOtQ&usqp=CAU' alt="question mark" className='h-8 pl-5 cursor-pointer' />
                    </div>
                </div>
            </nav>
            <div>
                <div className=' grid grid-cols-6 gap-x-8 gap-y-8 p-8 ' >
                    {filteredData.map((i, ind) => (
                        <div key={ind} className='m-1 p-3 border rounded-md border-black w-12/12 hover:drop-shadow-2xl hover:bg-red-600 hover:text-white hover:w-4fr cursor-pointer '>
                            <div className='flex flex-col justify-between items-center '>
                                <img src={i.imageLinks.smallThumbnail} alt="" className='w-20' />
                                <div>
                                    <h2 className='line-clamp-2 font-bold'>{i.title}</h2>
                                    <p>{i.averageRating ? `${i.averageRating}★ Free` : ' Free'}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainPage
