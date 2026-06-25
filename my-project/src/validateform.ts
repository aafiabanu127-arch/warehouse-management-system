function validationform(){
    const [email,setError]=userstate("")};
    const [error,setError]=userstate("");
import

function ValidationForm(){
    const[email,setEmail]=useState('');
    const [error, setError] = useState('');
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
    };
    const handleSubmit=() => {
        if(!email.includes('@')){
            setError('Enter a valid email address');
        }else{
            setError('');
            alert('Form submitted successfully!');
        }
    };

}