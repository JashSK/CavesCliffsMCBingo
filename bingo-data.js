const amogus = 'helo';
const bingoTiles = [{
        title: 'Caves and Cliffs',
        shortDescription: 'Fall from world height to world depth',
        longDescription: 'Fall from world height to world depth. While you’re down here look out for the deep slate ores for advancement number @20! You may also be able to tie this in with advancement number @6!',
        tileBackground: 'cavesandcliffs.png'
    },
    {
        title: 'Otherside',
        shortDescription: 'Play Otherside in a jukebox.',
        longDescription: 'Find and play Lena Raine’s new music disc, Otherside. This disc can be found rarely in strongholds and dungeons. If you are lucky enough to find it you will be rewarded with a jukebox to play it!',
        tileBackground: 'music_disc_otherside.png'
    },
    {
        title: 'The Cutest Predator',
        shortDescription: 'Catch an axolotl in a bucket',
        longDescription: 'Catch an axolotl by right clicking it with a bucket. Axolotls can be found in the Lush cave biome. While you’re here you can make good progress on the following advancements: @11, @15, @16, @17, @22',
        tileBackground: 'axolotl_bucket.png'
    },
    {
        title: 'Whatever Floats Your Goat',
        shortDescription: 'Float in a boat with a goat',
        longDescription: 'Ride in a boat with a goat as the 2nd passenger. You can do this by nudging the goat into the boat or riding the boat into the goat. Goats can be found in mountain biomes such as the snowy slopes. Be sure to save your boat for advancement number @20 and grab some milk from the goat for advancement number @7!',
        tileBackground: 'oak_boat.png'
    },
    {
        title: 'Glow and Behold!',
        shortDescription: 'Make the text of a sign glow',
        longDescription: 'Right click a sign with a glow ink sac. Glow ink sacs can be obtained from the new Glow squid which is found in water below y=30. While you’re here you might as well finish advancement number @23!',
        tileBackground: 'glow_ink_sac.png'
    },
    {
        title: 'Snowballer',
        shortDescription: 'Land into powder snow to break your fall',
        longDescription: 'Perform a power snow MLG by falling into a power snow block after falling from at least 10 blocks. Powdered snow is found naturally in groves and snowy slopes. While you’re here you might as well finish advancement number @14! You may also be able to tie this in with advancement number @1!',
        tileBackground: 'powder_snow_bucket.png'
    },
    {
        title: 'Birthday Kid',
        shortDescription: 'Light a candle on a cake',
        longDescription: 'Right click a cake with a candle and then right click the candle with flint and steel or a fire charge. Be careful to not take a bite out of the cake or else you won’t be able to place the candle. Honeycombs are needed to craft candles. Honey combs can be obtained by right clicking a bee’s nest. I heard that there are a few bee nests close to spawn 🐝',
        tileBackground: 'cake.png'
    },
    {
        title: 'This Stalagmite Hurt',
        shortDescription: 'Witness a mob die by falling on pointed dripstone',
        longDescription: 'Be within a 30 block radius of a mob that dies by falling onto pointed dripstone. This advancement will not activate if a mob dies due to a pointed dripstone falling on them (Sorry couldn’t figure out how to code it 😔). Dripstone naturally spawns in Dripstone cave biomes.',
        tileBackground: 'pointed_dripstone.png'
    },
    {
        title: 'Surge Protector!',
        shortDescription: 'Have a lightning strike a lightning rod near a village',
        longDescription: 'Have a lightning strike a lightning rod near a village without setting the surrounding area on fire. We have made this advancement a bit easier to achieve due to the infrequency of lightning. Use the game menu book to get a lightning charge. Right click with a lightning charge on top of a lightning rod to summon a lighting bolt at its location.',
        tileBackground: 'lightning_rod.png'
    },
    {
        title: 'Ahoy matey!',
        shortDescription: 'Look through a spyglass while on a shipwreck',
        longDescription: 'Use the spyglass while near a shipwreck structure. Shipwrecks spawn in oceans. Keep your ears open for a special sea shanty to help you find one. The spyglass is crafted with an amethyst shard. Amethyst shards can be found underground in geodes. Mine an amethyst cluster with any non silk touch pickaxe. While you’re here you might as well collect some extra shards for advancement number @24!',
        tileBackground: 'spyglass.png'
    },
    {
        title: 'Frog hopper',
        shortDescription: 'Keep off the ground for 15 secs while hopping on dripleaf plants',
        longDescription: 'You must keep from touching the ground for 15 secs by only standing on Big Dripleaf plants which can be found in the Lush cave biome. Redstone might help with this one 👀. While you’re in the Lush Caves you can make good progress on the following advancements: @3, @15, @16, @17, @22',
        tileBackground: 'big_dripleaf_top.png'
    },
    {
        title: 'bEaN bLoCk',
        shortDescription: 'Craft a block of raw gold',
        longDescription: 'Craft a block of raw gold from 9 raw gold',
        tileBackground: 'raw_gold_block.png'
    },
    {
        title: 'Karate Kid',
        shortDescription: 'Apply wax to a Copper block and then scrape wax off with axe',
        longDescription: 'This is a dual advancement that is completed upon finishing two similar advancements. Apply wax to any Cooper block, slab or stair by right clicking it with a honeycomb. Then remove wax by right clicking it with an axe. Honey combs can be obtained by right clicking a bee’s nest. I heard that they’re a few bee nests close to spawn 🐝',
        tileBackground: 'honeycomb.png'
    },
    {
        title: 'Light as a Rabbit',
        shortDescription: 'Walk on powder snow with leather boots',
        longDescription: 'Walk on powder snow while wearing leather boots. Powdered snow is found naturally in groves and snowy slopes. While you’re here you might as well finish advancement number @6!',
        tileBackground: 'leather_boots.png'
    },
    {
        title: 'Cave Stew',
        shortDescription: 'Craft cave stew',
        longDescription: 'Cave stew is a custom item added for this mini game. This recipe requires the following ingredients: glow lichen, hanging roots, azalea, flowering azalea, glowberry, big drip leaf, small drip leaf, and a moss block. Put them all together in the crafting table with a bowl. Drink it for a special potion effect 👀. While you’re in the Lush Caves you can make good progress on the following advancements: @3, @11, @16, @17, @22',
        imageDescription: 'cavestew.png',
        tileBackground: 'suspicious_stew.png'
    },
    {
        title: 'Lush Gardener',
        shortDescription: 'Put a flowering azalea into a pot',
        longDescription: 'Right click a flower pot with a flowering azalea plant. This plant can be found in the Lush Cave biome. While you’re here you can make good progress on the following advancements: @3, @11, @15, @17, @22',
        tileBackground: 'flowering_azalea_top.png'
    },
    {
        title: 'Forbidden flower',
        shortDescription: 'Craft a spore blossom',
        longDescription: 'The spore blossom has been given a custom crafting recipe for this mini game since it is currently unantable in survival. Craft with a glow berry and 4 magenta dye in the shape of a flower. Glow berries can be found in the Lush Cave biome. While you’re here you can make good progress on the following advancements: @3, @11, @15, @16, @22',
        imageDescription: 'sporeblossom.png',
        tileBackground: 'spore_blossom.png'
    },
    {
        title: 'I sense an illegal item',
        shortDescription: 'Craft a sculk sensor',
        longDescription: 'The sculk sensor has been given a custom crafting recipe since it is currently  unobtainable in survival. Craft with 3 warped wart blocks, a redstone dust, and 2 twisting vines. While you’re collecting twisting vines you might as well finish advancement number @22!',
        imageDescription: 'sculksensor.png',
        tileBackground: 'sculk_sensor_top.png'
    },
    {
        title: 'A Bundle of Joy',
        shortDescription: 'Craft a bundle',
        longDescription: 'The bundle has been given a custom crafting recipe since it is currently  unantable in survival. Craft with 6 leather or rabbit hides and 2 string.',
        tileBackground: 'bundle.png'
    },
    {
        title: 'Deep digger',
        shortDescription: 'Obtain 5 different deepslate ore variants',
        longDescription: 'Deepslate blocks generate below y=0. There exist 8 different deepslate ore variants. Some are harder to find than others but all varieties can be found around y=0 at various degrees. Some are more abundant at deeper y levels. Can you find 5 of them? You will need a silk touch pick to obtain the block as an ore. You can get a free one from the help manual but it seems to be poor quality. While you’re here you might be able to complete advancement number @22!',
        tileBackground: 'deepslate_diamond_ore.png'
    },
    {
        title: 'Underwater rollercoaster',
        shortDescription: 'Ride in a minecart under water',
        longDescription: 'You can now water log rails. The datapack will only recognize this advancement if you are riding a minecart on any rail that is in a water source block. You can make a water source block on a rail by right clicking it with a water bucket.',
        tileBackground: 'minecart.png'
    },
    {
        title: 'Wild Barber',
        shortDescription: 'Use shears to stop cave vines, kelp, weeping vines, or twisting vines from aging',
        longDescription: 'Shears have been given the ability to stop some plants from continuing to grow. Right click the tip of cave vines, kelp, weeping vines, or twisting vines with shears. If you find twisting vines be sure to take a couple with you for advancement number @18!',
        tileBackground: 'shears.png'
    },
    {
        title: 'Luminescent Inception ',
        shortDescription: 'Put a glowing item frame in a glowing item frame',
        longDescription: 'Right click a glowing item frame with a glowing item frame. You can craft a glowing item frame with a glow ink sac. Glow ink sacs can be obtained from the new Glow squid which is found in water below y=30. While you’re here you might as well finish advancement number @5!',
        tileBackground: 'glow_item_frame.png'
    },
    {
        title: 'Haven’t seen the light in ages',
        shortDescription: 'Craft a tinted glass pane',
        longDescription: 'Tinted glass panes are a custom item added for this mini game. Tinted glass can be crafted with 6 tinted glass blocks. You will need an amethyst shard to craft a tinted glass block. Amethyst shards can be found underground in geodes. Mine an amethyst cluster with any non silk touch pickaxe. While you’re here you might as well collect an extra shard for advancement number @10!',
        tileBackground: 'black_stained_glass.png'
    },
];

/*
    {
        title: '',
        shortDescription: '',
        longDescription: ''
    },
*/

const bingoCards = [
    [
        bingoTiles[19],
        bingoTiles[4],
        bingoTiles[7],
        bingoTiles[15],
        bingoTiles[2],

        bingoTiles[16],
        bingoTiles[8],
        bingoTiles[12],
        bingoTiles[17],
        bingoTiles[11],

        bingoTiles[10],
        bingoTiles[0],
        amogus,
        bingoTiles[5],
        bingoTiles[20],

        bingoTiles[13],
        bingoTiles[18],
        bingoTiles[9],
        bingoTiles[21],
        bingoTiles[3],

        bingoTiles[22],
        bingoTiles[6],
        bingoTiles[14],
        bingoTiles[23],
        bingoTiles[1]
    ],
    [
        bingoTiles[16],
        bingoTiles[22],
        bingoTiles[21],
        bingoTiles[9],
        bingoTiles[0],

        bingoTiles[10],
        bingoTiles[5],
        bingoTiles[7],
        bingoTiles[11],
        bingoTiles[3],
        
        bingoTiles[12],
        bingoTiles[15],
        amogus,
        bingoTiles[17],
        bingoTiles[18],
        
        bingoTiles[4],
        bingoTiles[1],
        bingoTiles[2],
        bingoTiles[6],
        bingoTiles[14],
        
        bingoTiles[13],
        bingoTiles[8],
        bingoTiles[19],
        bingoTiles[20],
        bingoTiles[23]
    ],
    [
        bingoTiles[1],
        bingoTiles[13],
        bingoTiles[15],
        bingoTiles[16],
        bingoTiles[14],

        bingoTiles[23],
        bingoTiles[21],
        bingoTiles[9],
        bingoTiles[4],
        bingoTiles[18],
        
        bingoTiles[2],
        bingoTiles[7],
        amogus,
        bingoTiles[0],
        bingoTiles[3],
        
        bingoTiles[10],
        bingoTiles[17],
        bingoTiles[22],
        bingoTiles[19],
        bingoTiles[12],
        
        bingoTiles[11],
        bingoTiles[6],
        bingoTiles[20],
        bingoTiles[8],
        bingoTiles[5]
    ],
    [
        bingoTiles[2],
        bingoTiles[5],
        bingoTiles[1],
        bingoTiles[0],
        bingoTiles[19],

        bingoTiles[10],
        bingoTiles[17],
        bingoTiles[20],
        bingoTiles[4],
        bingoTiles[18],
        
        bingoTiles[23],
        bingoTiles[14],
        amogus,
        bingoTiles[3],
        bingoTiles[9],
        
        bingoTiles[6],
        bingoTiles[13],
        bingoTiles[11],
        bingoTiles[7],
        bingoTiles[21],
        
        bingoTiles[12],
        bingoTiles[22],
        bingoTiles[8],
        bingoTiles[16],
        bingoTiles[15]
    ],
    [
        bingoTiles[13],
        bingoTiles[18],
        bingoTiles[15],
        bingoTiles[10],
        bingoTiles[2],

        bingoTiles[22],
        bingoTiles[20],
        bingoTiles[16],
        bingoTiles[17],
        bingoTiles[23],
        
        bingoTiles[14],
        bingoTiles[7],
        amogus,
        bingoTiles[3],
        bingoTiles[5],
        
        bingoTiles[0],
        bingoTiles[9],
        bingoTiles[11],
        bingoTiles[4],
        bingoTiles[6],
        
        bingoTiles[1],
        bingoTiles[19],
        bingoTiles[12],
        bingoTiles[8],
        bingoTiles[21]
    ],
];
