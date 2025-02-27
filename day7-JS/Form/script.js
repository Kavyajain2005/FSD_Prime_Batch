const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.email.value);
    console.log(e.target[0].value);
    console.log(e.target.fullName.value);
    console.log(e.target[1].value);
    // console.log(first);
    console.log(e.target.city.value);
    console.log(e.target[2].value);
}