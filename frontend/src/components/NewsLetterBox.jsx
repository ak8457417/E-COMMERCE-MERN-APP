import React from 'react';

const NewsLetterBox = () => {

    const onSubmitHandler = (evt) => {
        evt.preventDefault();
    }

    return (
        <div className={'text-center'}>
            <p className={'text-2xl font-medium text-gray-800'}>Subscribe now & get 20% off</p>
            <p className={'text-gray-400 mt-3'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam officiis praesentium sapiente sint? Aspernatur commodi excepturi magni odio sint. Aut, fuga incidunt nam neque praesentium ratione recusandae rerum similique. Debitis?
            </p>
            <form onSubmit={onSubmitHandler} className={'w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'}>
                <input className={'w-full sm:flex-1 outline-none'} type='email' name='email' placeholder='Enter your email' required />
                <button className={'bg-black text-white text-xs px-10 py-4'} type='submit' name='submit'>SUBSCRIBE</button>
            </form>
        </div>
    );
};

export default NewsLetterBox;
