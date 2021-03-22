export default {
    state: {
        guests: [
            {
                id: '1',
                guestName: 'Тимур и Лидия',
                url: "TimurAndLida"
            },
            {
                id: '2',
                guestName: 'Антон',
                url: 'Anton'

            },
            {
                id: '3',
                guestName: 'Владислав и Анна',
                url: 'VladislavAndAnna'
            },
            {
                id: '4',
                guestName: 'Виталий и Ксения',
                url: 'VitalyAndKsenia'
            },
            {
                id: '5',
                guestName: 'Анна и Даниил',
                url: 'DanielAndAnna'
            },
            {
                id: '6',
                guestName: 'Анастасия и Денис',
                url: 'AnastasiaAndDenis'
            },
            {
                id: '7',
                guestName: 'Екатерина',
                url: 'Catherine'
            },
            {
                id: '8',
                guestName: 'Елена',
                url: 'Elena'
            },
            {
                id: '9',
                guestName: 'Ксения и Вячеслав',
                url: 'KseniaAndVyacheslav'
            },
            {
                id: '10',
                guestName: 'Анастасия',
                url: 'Anastasia'
            },
            {
                id: '11',
                guestName: 'Валентина',
                url: 'Valentine'
            },
            {
                id: '12',
                guestName: 'Илья и Анна',
                url: 'IlyaAndAnna'
            },
            {
                id: '13',
                guestName: 'Андрей и Екатерина',
                url: 'AndreyAndEkaterina'
            },
            {
                id: '14',
                guestName: 'Евгений и Наталья',
                url: 'EvgenyAndNatalia'
            },
            {
                id: '15',
                guestName: 'Светлана и Максим',
                url: 'SvetlanaAndMaxim'
            },
            {
                id: '16',
                guestName: 'Ирина и Роман',
                url: 'IrinaAndRoman'
            },
            {
                id: '17',
                guestName: 'Александр и Юлия',
                url: 'AlexanderAndJulia'
            },
            {
                id: '18',
                guestName: 'Александр и Ольга',
                url: 'AlexanderAndOlga'
            },
            {
                id: '19',
                guestName: 'Дмитрий',
                url: 'Dmitry'
            },
            {
                id: '20',
                guestName: 'Елена и Алексей',
                url: 'ElenaAndAlexey'
            },
            {
                id: '21',
                guestName: 'Дорогие Родители',
                url: 'parents'
            },
            {
                id: '22',
                guestName: 'Дорогая Мама',
                url: 'mother'
            },
            {
                id: '23',
                guestName: 'Ольга Ивановна и Андрей Валерьевич',
                url: 'OlgaAndAndrey'
            },
            {
                id: '24',
                guestName: 'Сергей Дмитриевич и Екатерина Васильевна',
                url: 'SergeyAndEkaterina'
            },
            {
                id: '25',
                guestName: 'Екатерина и Нина Михайловна',
                url: 'EkaterinaAndNina'
            },
        ]
    },
    mutation: {},
    actions: {},
    getters: {
        guests (state){
            return state.guests
        },
        guestByUrl(state) {
            return url => {
                return state.guests.find(guest => guest.url == url)
            }
        }
    }
}