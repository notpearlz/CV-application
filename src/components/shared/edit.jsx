function EditButton({name, handleEdit}){
    return (
        <>
        
            <button className='edit-btn'onClick={handleEdit} data-form={name} type="button">Edit</button>
        </>
    )
}

export default EditButton