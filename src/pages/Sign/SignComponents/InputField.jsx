// import { useState } from 'react';

// export default function TextInput(){
//     const [email,setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         if (!email || !password) {
//             console.error('이메일과 비밀번호를 입력하세요.');
//             return;
//         }
//         console.log('Email:',email);
//         console.log('Password:',password);
//         setEmail(''); // 입력 필드 초기화
//         setPassword('');
//     }

//     return (
//         <form onSubmit={handleSubmit} className="max-w-sm p-6 mx-auto space-y-4 bg-white rounded shadow-md">
//             <h2 className="text-2xl font-semibold text-gray-800">로그인</h2>
//             <InputField
//                 label="이메일"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="example@email.com"
//             />
//             <InputField
//                 label="비밀번호"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//             />
//             <button
//                 type="submit"
//                 className="w-full py-2 text-white transition bg-orange-500 rounded hover:bg-orange-600"
//             >
//                 로그인
//             </button>
//         </form>
//     );
// }
export default function InputField({ label, type, value, onChange, placeholder }) {
    return (
        <div>
            <label className="block mb-1 text-gray-700">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
            />
        </div>
    );
}