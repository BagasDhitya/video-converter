const Loading = () => {
    return (
        <div className='flex flex-col items-center gap-y-10'>
            <div className="animate-spin mx-auto rounded-full h-16 w-16 border-t-2 border-b-2 border-red-700" />
            <p className='text-red-700 text-md text-center'>Please wait ... working on it <br /> as soon as possible</p>
        </div>
    )
}

export default Loading