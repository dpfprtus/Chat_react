import React,{useState} from 'react';

const Join = () => {
	const [name,setName] = useState("");
	const [room,setRoom] = useState("");
	
	const onChange = (e)=>{
		const {target:{value}} = e;
		setName(value);
	}
	return (
	<div>
		<div>
			<h1>Join</h1>
			<div>
			<input 
				placeholder="이름" 
				type="text" value={name} 
				onChange={onChange} />
			
			</div>
			<div>
			<input 
				placeholder="채팅방"
				type="text" value={room} 
				onChange={(e)=>setRoom(e.target.value)}/>
			</div>
			</div>
		</div>
	)
}
export default Join;