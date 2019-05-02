import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import * as faker from "faker";
@Injectable({
  providedIn: "root"
})
export class DataService implements InMemoryDbService {
  createDb() {
    const auth = [
      {
        id: 1,
        email: "test@gmail.com",
        password: "Test2019",
        login: "test"
      }
    ];

    const users = Array(10)
      .fill(null)
      .map(e => {
        return {
          id: 1,
          nom: faker.name.findName(),
          fonction: faker.name.findName(),
          adresse: faker.address.city(),
          telephone: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          pseudo: faker.name.findName(),
          mdp: faker.name.findName(),
          tokenn: faker.random.number({ min: 0, max: 5 }),
          permission: faker.random.number({ min: 0, max: 5 }),
          dateInscrit: faker.date.past(75),
          dateArrive: faker.date.past(75),
          statu: true,
          parrain: faker.name.findName(),
          interlocuteur: faker.name.findName()
        };
      });

    const events = [
      {
        tag: "angular",
        description:
          " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:
          "https://backgrounddownload.com/wp-content/uploads/2018/09/web-developer-background-images-1.jpg",
        thumbnailUrl:
          "https://backgrounddownload.com/wp-content/uploads/2018/09/web-developer-background-images-1.jpg"
      },
      {
        tag: "angular",
        description:
          " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://images6.alphacoders.com/425/425061.jpg",
        thumbnailUrl: "https://images6.alphacoders.com/425/425061.jpg"
      },
      {
        tag: "angular",
        description:
          " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355"
      },
      {
        tag: "react",
        description:
          " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
      },
      {
        tag: "angular",
        description:
          " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://via.placeholder.com/600/f66b97",
        thumbnailUrl: "https://via.placeholder.com/150/f66b97"
      },
      {
        tag: "react",
        description:
          " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        id: 6,
        title: "accusamus ea aliquid et amet sequi nemo",
        url: "https://via.placeholder.com/600/56a8c2",
        thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
      },
      {
        tag: "angular",
        description:
          " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        id: 7,
        title:
          "officia delectus consequatur vero aut veniam explicabo molestias",
        url: "https://via.placeholder.com/600/b0f7cc",
        thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
      },
      {
        tag: "vuejs",
        description:
          " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        id: 8,
        title: "aut porro officiis laborum odit ea laudantium corporis",
        url: "https://via.placeholder.com/600/54176f",
        thumbnailUrl: "https://via.placeholder.com/150/54176f"
      },
      {
        tag: "angular",
        description:
          " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        id: 9,
        title: "qui eius qui autem sed",
        url: "https://via.placeholder.com/600/51aa97",
        thumbnailUrl: "https://via.placeholder.com/150/51aa97"
      },
      {
        tag: "react",
        description:
          " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        id: 10,
        title: "beatae et provident et ut vel",
        url: "https://via.placeholder.com/600/810b14",
        thumbnailUrl: "https://via.placeholder.com/150/810b14"
      }
    ];
    return { auth, events, users };
  }

  constructor() {}
}
