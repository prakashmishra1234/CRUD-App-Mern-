import React from 'react';
class InputStudent extends React.Component
{
    state = {
        firstname: "",
        lastname: "",
        place: ""
    }

    handlechange = (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name] : e.target.value})
    }

    render()
    {
        return(
            <div class="row text-center">
                <div class="col-md-4">
                    <form>
                        <input onChange={(e)=> this.handlechange(e)} name="firstname" value={this.state.firstname} style={{fontFamily:'cursive,sans-serif,Gugi', borderRadius:'10px', marginLeft:'50px', marginTop:"20px"}} placeholder='First Name' class="form-control"/>
                        <input onChange={(e)=> this.handlechange(e)} name="lastname" value={this.state.lastname} style={{fontFamily:'cursive,sans-serif,Gugi', borderRadius:'10px', marginLeft:'50px', marginTop:"20px"}} placeholder='Last Name' class="form-control"/>
                        <input onChange={(e)=> this.handlechange(e)} name="place" value={this.state.place} style={{fontFamily:'cursive,sans-serif,Gugi', borderRadius:'10px',marginLeft:'50px', marginTop:"20px"}}placeholder='Place' class="form-control"/>
                        <button style={{borderRadius:'10px',fontSize:"19px",fontFamily:'cursive,sans-serif,Gugi',outline:'none',color:'white',backgroundColor:"#000066",marginLeft:'50px', marginTop:"20px", width:'435px'}} class="btn">CREATE</button>
                    </form>
                </div>
                <div >

                </div>
            </div>
        )
    }
}
export default InputStudent;