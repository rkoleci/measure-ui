import { BookType, Square } from "lucide-react"
import { useMeasure } from "../store"

export default function MenuBar() {
    const { typography, setTypography, div, setDiv } = useMeasure()

    const onTChange = () => {
        setTypography()
    }

    const onDivChange = () => {
        setDiv()
    }

    return (
            <div style={{ position: 'fixed', top: 10, left: 0, right: 0, margin: 'auto', display: 'flex', gap: '8px', justifyContent: 'flex-start', alignItems: 'center', width: '40%', padding: '4px', borderRadius: '8px', backgroundColor: '#f0f0f0' }}>
                <div onClick={onTChange} style={{ width: '30px', height: '30px', padding: 4, border: 'none', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: typography ? '#e0dfff' : '#f0f0f0', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
                <BookType size={20} color='#121212' id="measure-a" />
                </div>
                <div onClick={onDivChange} style={{ width: '30px', height: '30px', padding: 4, border: 'none', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: div ? '#e0dfff' : '#f0f0f0', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
                <Square  size={20} color='#121212' id="measure-div"  />
                </div>
            </div>
    )

}