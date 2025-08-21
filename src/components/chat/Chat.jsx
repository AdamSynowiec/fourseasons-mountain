import React, { useState, useRef, useEffect } from 'react';

const dialogTree = {
    start: {
        bot: "Witaj! Jak mogę Ci pomóc?",
        options: [
            { id: 'ile_mieszkan', label: 'Ile jest mieszkań?' },
            { id: 'cena_metr', label: 'Jaka cena za metr?' },
            { id: 'lokalizacja', label: 'Gdzie znajduje się inwestycja?' },
        ]
    },
    ile_mieszkan: {
        bot: "Mamy dostępnych 120 mieszkań w różnych metrażach.",
        options: [
            { id: 'typy_mieszkan', label: 'Jakie są typy mieszkań?' },
            { id: 'powrot', label: 'Wróć do głównego menu' }
        ]
    },
    cena_metr: {
        bot: "Cena za metr kwadratowy zaczyna się od 8 000 PLN.",
        options: [
            { id: 'srodki_finansowe', label: 'Czy są dostępne programy finansowania?' },
            { id: 'powrot', label: 'Wróć do głównego menu' }
        ]
    },
    lokalizacja: {
        bot: "Inwestycja znajduje się w centrum miasta, blisko komunikacji.",
        options: [
            { id: 'atrakcje', label: 'Jakie są atrakcje w okolicy?' },
            { id: 'powrot', label: 'Wróć do głównego menu' }
        ]
    },
    typy_mieszkan: {
        bot: "Oferujemy kawalerki, mieszkania 2- i 3-pokojowe.",
        options: [
            { id: 'powrot', label: 'Wróć do głównego menu' }
        ]
    },
    srodki_finansowe: {
        bot: "Tak, oferujemy korzystne programy kredytowe i dofinansowania.",
        options: [
            { id: 'powrot', label: 'Wróć do głównego menu' }
        ]
    },
    atrakcje: {
        bot: "W pobliżu są parki, centra handlowe i szkoły.",
        options: [
            { id: 'powrot', label: 'Wróć do głównego menu' }
        ]
    },
    powrot: {
        bot: "Wróciłem do głównego menu. W czym mogę pomóc?",
        options: [
            { id: 'ile_mieszkan', label: 'Ile jest mieszkań?' },
            { id: 'cena_metr', label: 'Jaka cena za metr?' },
            { id: 'lokalizacja', label: 'Gdzie znajduje się inwestycja?' },
        ]
    }
};

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, from: 'bot', text: dialogTree.start.bot }
    ]);
    const [currentOptions, setCurrentOptions] = useState(dialogTree.start.options);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setOpen(!open);

    const selectOption = (id) => {
        // Dodajemy wiadomość użytkownika
        const userMessage = dialogTree.start.options.find(opt => opt.id === id)?.label ||
            Object.values(dialogTree).find(node => node.options?.some(o => o.id === id))?.options.find(o => o.id === id)?.label ||
            id;
        setMessages(prev => [...prev, { id: prev.length + 1, from: 'user', text: userMessage }]);

        // Bot odpowiada i pokazuje kolejne opcje
        if (dialogTree[id]) {
            setTimeout(() => {
                setMessages(prev => [...prev, { id: prev.length + 1, from: 'bot', text: dialogTree[id].bot }]);
                setCurrentOptions(dialogTree[id].options);
            }, 500);
        } else {
            // Jeśli nie ma dalszych opcji - wróć do startu
            setTimeout(() => {
                setMessages(prev => [...prev, { id: prev.length + 1, from: 'bot', text: dialogTree.start.bot }]);
                setCurrentOptions(dialogTree.start.options);
            }, 500);
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div
            className={`fixed bottom-5 right-5 flex flex-col transition-all duration-300
        ${open ? 'w-72 h-[420px]' : 'w-auto h-14'}`}
        >
            <div
                onClick={toggleChat}
                className="cursor-pointer select-none font-bold text-center p-3 flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: '#A8853F', color: '#F4F1ED' }}
            >
                {open ? 'Zamknij' : 'Asystent'}
            </div>

            {open && (
                <>
                    <div
                        className="flex-1 p-4 overflow-y-auto"
                        style={{ backgroundColor: '#1E1E1E', color: '#F4F1ED' }}
                    >
                        {messages.map(m => (
                            <div
                                key={m.id}
                                className={`mb-3`}
                                style={{ textAlign: m.from === 'user' ? 'right' : 'left' }}
                            >
                                <span
                                    className="inline-block px-4 py-2"
                                    style={{
                                        backgroundColor: m.from === 'user' ? '#A8853F' : '#3E3E3E',
                                        color: '#F4F1ED',
                                        wordWrap: 'break-word',
                                    }}
                                >
                                    {m.text}
                                </span>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 flex flex-wrap gap-2 justify-center" style={{ backgroundColor: '#3E3E3E' }}>
                        {currentOptions.map(opt => (
                            <button
                                key={opt.id}
                                onClick={() => selectOption(opt.id)}
                                className="rounded-full px-4 py-2 font-semibold hover:opacity-80 transition-opacity text-sm cursor-pointer"
                                style={{ backgroundColor: '#A8853F', color: '#F4F1ED' }}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Chat;
