# Kaetram

[![MPL-2.0 License](https://img.shields.io/github/license/Kaetram/Kaetram-Open)][license]

This is a copy of Kaetram open-source 2D MMORPG.

## Features

### Regions

The region system works by segmenting the map into smaller chunks that are then sent to the client. The client caches
the map data and stores it for quicker loading in the local storage. When a new map version is present, the client
purges the cache and starts the process again. The region system is split into static tiles and dynamic tiles. Static
tiles do not undergo a change and are part of the map permanently. Dynamic tiles change depending on conditions such
as a player's achievement/quest progress, or, in the case of trees, depending on whether the tree has been cut or not.
In the future we plan to use this region system to create instanced versions of areas, for example running multiple minigame
instances at the same time.

Video example showcasing region system using an exaggerated example:
[![Kaetram Region System](https://img.youtube.com/vi/pt_CEgjfORE/0.jpg)](https://www.youtube.com/watch?v=pt_CEgjfORE)

### Tilemap

Kaetram uses [Tiled Map Editor](https://www.mapeditor.org/) to create and modify the map. Our [map parsing](#map-parsing) tool
is used to export a condesed version of the map data. The server receives the bulk of the information and uses it to calculate
collisions, tile data information, and areas (pvp, music, etc). The client stores minimal data such as tile 'z-index' and animations.

### Map Parsing

Once finished modifying your map in [`packages/tools/map/data/`](packages/tools/map/data/), you can
parse the map data by executing `yarn exportmap` inside the [`packages/tools/`](packages/tools/)
directory.

Example command:

```console
yarn exportmap ./data/map.json
```

To build the current game map, you can run

```console
yarn map
```

### Kaetram Hub

The hub functions as a gateway between servers. Due to performance limitations of NodeJS it is more feasible
to host multiple servers instead of one big one containing thousands of players. The hub does exactly that, once
the hub is running and a server instance is given the host address for the hub, it will automatically connect. The
hub becomes the primary connection point for the client. When a request for connection is received, the hub
will pick the first server that has room for the player. Alternatively, it allows players to select any server
amongst the list of servers.

To enable the hub server, see [Configuration](#configuration), and set these values to `true`.

```sh
API_ENABLED=true
HUB_ENABLED=true
```

## Roadmap

### TODO

- Non-tiled map
- Add special attacks to weapons
- Add functionality to the special abilities
- Add player-owned guilds and/or parties
- Weapons/armours/rings/pendants enchantments
- Diversify game content (add more skills, minigames, activities, items, etc)
- Improve usability of the user interface on mobile devices
- Move pathfinding to the server-side once alpha is over

This project is distributed under the
**[Mozilla Public License Version 2.0](https://choosealicense.com/licenses/mpl-2.0/)**. See
[`LICENSE`][license] for more information.
