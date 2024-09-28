import { useMeasure } from "../store"

export default function MenuBar() {
    const { typography, setTypography } = useMeasure()

    const onTChange = () => {
        setTypography()
    }



    return (
            <div style={{ position: 'fixed', top: 10, left: 0, right: 0, margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '40%', padding: '4px', borderRadius: '8px', backgroundColor: '#f0f0f0' }}>
                <div onClick={onTChange} style={{ width: '30px', height: '30px', padding: 4, border: 'none', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: typography ? '#e0dfff' : 'white', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
                    <p id='measure-a' style={{ margin: 0, textAlign: 'center', fontSize: 14, fontWeight:'500', color: '#121212' }}>A</p>
                </div>

            </div>
    )

}