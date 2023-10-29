const HOBBY_DATA = [
    {
        "id": 1,
        "name": "Photography",
        "description": "Capturing moments through the lens of a camera. ",
        "img": "https://dummyimage.com/300x250/000/fff",
        "famousPersons": [
            {
                "name": "Ansel Adams",
                "img": "https://dummyimage.com/250x300/000/fff"
            }
        ],
    },
    {
        "id": 2,
        "name": "Cooking",
        "description": "Creating delicious dishes in the kitchen. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        "img": "https://dummyimage.com/300x250/000/fff",
        "famousPersons": [
            {
                "name": "Julia Child",
                "img": "https://dummyimage.com/250x300/000/fff"
            },
            {
                "name": "Julia Child",
                "img": "https://dummyimage.com/250x300/000/fff"
            },
            {
                "name": "Julia Child",
                "img": "https://dummyimage.com/250x300/000/fff"
            },
            {
                "name": "Julia Child",
                "img": "https://dummyimage.com/250x300/000/fff"
            },
            {
                "name": "Julia Child",
                "img": "https://dummyimage.com/250x300/000/fff"
            },
            {
                "name": "Julia Child",
                "img": "https://dummyimage.com/250x300/000/fff"
            }
        ],
    },
    {
        "id": 3,
        "name": "Gardening",
        "description": "Cultivating plants and creating beautiful gardens.",
        "img": "https://dummyimage.com/300x250/000/fff",
        "famousPersons": [
            {
                "name": "Monty Don",
                "img": "https://dummyimage.com/250x300/000/fff"
            }
        ],
    },
    {
        "id": 4,
        "name": "Hiking",
        "description": "Exploring nature and enjoying outdoor adventures.",
        "img": "https://dummyimage.com/300x250/000/fff",
        "famousPersons": [
            {
                "name": "John Muir",
                "img": "https://dummyimage.com/250x300/000/fff"
            }
        ],
    },
    {
        "id": 5,
        "name": "Painting",
        "description": "Expressing creativity through colors and brush strokes.",
        "img": "https://dummyimage.com/300x250/000/fff",
        "famousPersons": [
            {
                "name": "Leonardo da Vinci",
                "img": "https://dummyimage.com/250x300/000/fff"
            }
        ],
    },
    {
        "id": 6,
        "name": "Playing Music",
        "description": "Creating melodies and harmonies with instruments.",
        "img": "https://dummyimage.com/300x250/000/fff",
        "famousPersons": [
            {
                "name": "Ludwig van Beethoven",
                "img": "https://dummyimage.com/250x300/000/fff"
            }
        ],
    },
    {
        "id": 7,
        "name": "Reading",
        "description": "Immersing in stories and gaining knowledge through books.",
        "img": "https://dummyimage.com/300x250/000/fff",
        "famousPersons": [
            {
                "name": "Jane Austen",
                "img": "https://dummyimage.com/250x300/000/fff"
            }
        ],
    },
    {
        "id": 8,
        "name": "Travelling",
        "description": "Exploring new places and experiencing different cultures.",
        "img": "https://dummyimage.com/300x250/000/fff",
        "famousPersons": [
            {
                "name": "Marco Polo",
                "img": "https://dummyimage.com/250x300/000/fff"
            }
        ],
    },
    {
        "id": 9,
        "name": "Yoga",
        "description": "Nurturing physical and mental well-being through practice.",
        "img": "https://dummyimage.com/300x250/000/fff",
        "famousPersons": [
            {
                "name": "B.K.S. Iyengar",
                "img": "https://dummyimage.com/250x300/000/fff"
            }
        ],
    },
];

export const getHobbies = async () => {
    return HOBBY_DATA;
};

export const getHobby = async (id) => {
    return HOBBY_DATA.find(hobby => hobby.id === Number(id));
};
