import { QRCodeCanvas } from "qrcode.react";
export default function PixModal({
    pixModal,
    pixCopied,
    copyPix,
    closeModal
}) {
    return (
        <div
            className="pix-overlay"
            onClick={closeModal}
        >
            <div
                className="pix-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>
                    Um presente para nossa nova casa 🏡
                </h2>
                <p>
                    Aponte a câmera do seu banco ou copie o PIX abaixo
                </p>
                <div className="pix-info">
                    🎁 {pixModal.gift.name}
                    <br />
                    <strong>
                        R$ {pixModal.gift.price.replace(".", ",")}
                    </strong>
                </div>
                <div className="qr-container">
                    <QRCodeCanvas
                        value={pixModal.pix}
                        size={220}
                    />
                </div>
                <button
                    className={
                        pixCopied
                            ? "pix-copy success"
                            : "pix-copy"
                    }
                    onClick={copyPix}
                >
                    {
                        pixCopied
                            ? "✓ PIX copiado com sucesso"
                            : "Copiar PIX"
                    }
                </button>
                <button
                    className="close-button"
                    onClick={closeModal}
                >
                    Fechar
                </button>
            </div>
        </div>
    );
}