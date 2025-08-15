export default function GameOverPopup({ score, highest, onClose }) {
    return (
        <div className="popup">
            <div className="popup-content">
                <h2>Game Over!</h2>
                <p>Bạn đã đạt {score} điểm</p>
                <p>Điểm cao nhất: {highest}</p>
                <button onClick={onClose}>Chơi lại</button>
            </div>
        </div>
    );
}
