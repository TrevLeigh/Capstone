var mongoose = require('mongoose'), 
    encrypt = require('../utilities/encryption');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));

    db.once('open', function callback(){
        console.log('capstone db opened');
    });
    
    var userSchema = mongoose.Schema({
        email: String, 
        username: String,
        salt: String,
        hashed_pwd: String,
        roles: [String]
    });
    userSchema.methods = {
        authenticate: function(passwordToMatch){
            return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    }
    var User = mongoose.model('User', userSchema);
    
    var fbUserSchema = mongoose.Schema({
        id: String,
        token: String,
        email: String,
        username: String,
        image: String
    });
    var FbUser = mongoose.model('FbUser',fbUserSchema);
    
    var googleUserSchema = mongoose.Schema({
        id: String,
        token: String,
        email: String,
        username: String,
        image: String
    });
    
    var GoogleUser = mongoose.model('GoogleUser', googleUserSchema);
    
    var regimenSchema = mongoose.Schema({
        name: String, 
        workouts:[String],
        endDate: Date,
        owner: String
    });
    
    var WorkoutRegimen = mongoose.model('Regimen', regimenSchema);
    
    var workoutSchema = mongoose.Schema({
        name: String,
        owner: String,
        exercises:[{
            exercise: String,
            sets: Number,
            reps: [Number]
        }]
    });
    
    var Workout = mongoose.model('Workout', workoutSchema);
    
    var exercizeSchema = mongoose.Schema({
            name: {
                type: String,
                required: true,
                
            },
            owner:{
                type: String,
                required:true
            },
            equipment: {
                type: String,
                required: true,
                default: "None"
            },
            description: {
                type: String,
                required:true
            },
            muscles: String,
            category:{
                type:String,
                enum:["Arms","Legs","Abs","Chest","Back","Shoulders","Calves"],
                required: true
            }
    });
    
    var Exercise = mongoose.model('Exercise', exercizeSchema);
    
    var downloadSchema = mongoose.Schema({
        workout: [String],
        owner: String
    });
    
    Exercise.find({}).exec(function(err, collection){
        if(collection.length === 0){
            
            Exercise.create({name:'Barbell Triceps Extension', equipment:'Barbell', description:'Position barbell overhead with narrow overhand grip. Lower forearm behind upper arm with elbows remaining overhead. Extend forearm overhead. Lower and repeat.',muscles:'Triceps branchii',category:'Arms'});
            
            Exercise.create({name:'Bench Press Narrow Grip', equipment:'Barbell, Bench', description:'Lay down on a bench, the bar is directly over your eyes, the kneews form a slight angle and the feet are firmly on the ground. Hold the bar with a narrow grip. Lead the weight slowly down till the arms are parallel to the floor, press the bar up. When bringing the bar down, dont let it down on your nipples as with the regular bench pressing.',muscles:'Triceps branchii', category:'Arms'});
            
            Exercise.create({name:'Biceps Curl With Cable', equipment:'Cable', description:'Stand around 30 - 40cm away from the cable, the feet are firmly on the floor. Take the bar and lift the weight with a fast movement. Lower the weight as with the dumbbell curls slowly and controlled.',muscles:'Biceps brachii', category:'Arms'});
            
            Exercise.create({name:'Biceps Curl With SZ-bar', equipment:'SZ-Bar', description:'Hold the SZ-bar shoulder-wide, the back is straight, the shoulders slightly back, the arms are streched. Bend the arms, bringing the weight up, what a fast movement. Without pausing, let down the bar with a slow and controlled movement. Dont allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move.',muscles:'Biceps brachii, Brachialis', category:'Arms'});
            
            Exercise.create({name:'Biceps Curl With Barbell', equipment:'Barbell', description:'Hold the Barbell shoulder-wide, the back is straight, the shoulders slightly back, the arms are streched. Bend the arms, bringing the weight up, what a fast movement. Without pausing, let down the bar with a slow and controlled movement. Dont allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move.',muscles:'Biceps brachii, Brachialis', category:'Arms'});
            
            Exercise.create({name:'Biceps Curl With Dumbbell', equipment:'Dumbbell', description:'Hold two barbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly.Dont allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move',muscles:'Biceps brachii, Brachialis', category:'Arms'});
            
            Exercise.create({name:'Body-Ups', equipment:'None', description:'Assume a plant position on the ground. You should be supporting your bodyweight on your toes arnd forearms, keeping your torso straight. Your forearms should be shoulder-width apart. This will be your starting position. Pressing your palms firmly into the ground, extend through the elbows to raise your body from the ground. Keep your torso rigid as you perform the movement. Slowly lower your forearms back to the ground by allowing the elbows to flex. Repead for specified number of reps.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Close-grip Bench Press', equipment:'Barbell, Bench', description:'Perform a typical bench press, but hold the bar with your hands approximately shoulder-width apart and keep your elbows close to your body.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Deadhang', equipment:'Bench', description:'Deadhang performed on an edge either with or without added weight.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Dips', equipment:'None', description:'Hold onto the bars at a narrow place and press yourself up, but dont stretch the arms completely, so the muscles stay during the whole exercise uner tension. Now bend the arms and go down as much as you can, keeping the elbows always pointing back, At this point, you can make a short pause before repeating the movement.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Dips Between Two Benches', equipment:'Bench', description:'Put two benches so far apart, that you can hold onto one with your hands and are jus able to reach the other with your feet. The legs stay during the exercise completely stretched. With our elbows facing back, bend them as much as you ca. Push Yourself up, but dont stretch out the arms.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Dumbbell Concentration Curl', equipment:'Dumbbell', description:'Sit on bench. Grasp dumbell between feet. Place back of upper arm to inner thigh. Lean into leg to raise elbow slightly.',muscles:'Brachialis, Biceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Dumbbell Incline Curl', equipment:'Dumbbell', description:'With elbows back to sides, raise one dumbbell and rotate forearm until forearm is vertical and palm faces shoulder. Lower to original position and repeat with opposite arm. Continue to alternate between sides.',muscles:'Brachialis, Biceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Dumbbell Triceps Extension', equipment:'Dumbbell', description:'Position one dumbbell over head with both hands under inner plate. With elbows over head, lower forearm behind upper arm by flexing elbows. Flex wrists at bottom to avoid hitting dumbbell on back of neck. Raise dumbbell over head by extending elbows while hyperextending wrists. Return and repeat.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'French Press(skullcrusher) SZ-bar', equipment:'Bench, SZ-Bar', discription:'Hold the SZ-bar and lay down on a flat bench in such a way that around 1/4 of your head is over the edge. Stretch your arms with the bar and bend them so that the bar is lowered. Just before it touches your forehead, push it up. Pay attention to your elbows are arms: only the triceps are doing the work, the rest of the arms should not move.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'French Press(skullcrusher) Dumbbells', equipment:'Bench, Dumbbell', description:'Hold the dumbbells and lay down on a flat bench in such a way that around 1/4 of your head is over the edge. Stretch your arms with the weights and bend them so that the dumbbells are lowered. Just before they touch your forehead, push them up. Pay attention to your elbows and arms: only the triceps are doing the work, the rest of the arms should not move.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Hammercurls', equipment:'Dumbbell', description:'Hold two dumbbells and sit on a bench with a straight back, the shoulders are slightly rolled backwards. Your pals point to your body. Bend the arms and bring the weight up with a fast movement. Dont rotate your hands, as with the curls. Without any pause bring the dumbbell down with a slow, controlled movement. Dont swing your body during the exercise, the biceps should do all the work here. The elbows are at your side and dont move.',muscles:'Biceps Brachii', category:'Arms'});
            
             Exercise.create({name:'Hammercurls on Cable', equipment:'Cable', description:'Take a cable in your hands, the body is straight. Bend the arms and bring the weight up with a fast movement. Without any pause bring it back down with a slow, controlled movement, but dont stretch you arms completely. Dont swing your body during the exercise, the biceps should do all the work here. The elbows are at your side and dont move',muscles:'Biceps Brachii, Brachialis', category:'Arms'});
            
            Exercise.create({name:'Hercules Pillars', equipment:'Cable', description:'Grab two cables stand in the middle so both have tension and hold.',muscles:'Biceps Brachii, Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Military Press', equipment:'SZ-Bar', description:'On an SZ-bar grip your hands on the outside of each bend and stand with your arms straight down, palms facing your legs. Pull the bar to your chest, and the push the bar above your head. Return the bar to your chest by dropping your arms at the elbows. Return the bar to its original position.',muscles:'Biceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Preacher Curls', equipment:'EX-Curl Bar', description:'Place the EZ curl bar on the rest handles in front of the preacher bench. Lean over the bench and grab the EZ curl bar with palms up. Sit down on the preacher bench seat so your upper arms rest on top of the pad and your chest is pressed against the pad. Lower the weight until your elbows are extended and arms are straight. Bring the weights back up to the starting point by contracting biceps. Repeat.',muscles:'Brachialis', category:'Arms'});
            
            Exercise.create({name:'Push Ups', equipment:'none', description:'Start with your body streched, your hands are shoulder-wide appart on the ground. Push yourself off the ground till you strech your arms. The back is always straight and as well as the neck. Lower yourself to the initial position and repeat.',muscles:'Biceps brachii, Biceps femoris', category:'Arms'});
            
            Exercise.create({name:'Reverse Bar Curl', equipment:'SZ-Bar', description:'Hold bar with reverse grip, palms facing the floor.',muscles:'Biceps brachii', category:'Arms'});
            
            Exercise.create({name:'Single-Arm Preacher Curl', equipment:'Dumbbell', description:'Sit on the preacher curl bench and perform a bicep curl with a dumbbell in one hand. Your other hand can be at rest, or beneath your curling arms elbow.',muscles:'Biceps brachii', category:'Arms'});
            
            Exercise.create({name:'Smith Machine Close-Grip Bench Press', equipment:'Bench', discription:'Perform a standard bench press on the smith machine, but have your hands on the bar about shoulder width apart, and keep your elbows close to your body.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Tricep Dumbbell Kickback', equipment:'Dumbbell', description:'Start with a sumbbell in each hand and your palms facing your torso. Keep you back straight with a slight bend in the knees and bend forward at the waist. Your torso should be almost parallel to the floor. Make sure to keep you head up.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Tricep Dips', equipment:'None', description:'Lift on parallel bars hold for 1 second, and lower slowly and control for 4 seconds, then come back with no rest.',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Tricep Extensions on Cable', equipment:'Cable', description:'Grab the cable, stand with your feet shoulder wide, keep your back straight and lean forward a little. Push the bar down, making sure the elbows dont move during the exercise. Rotate your hands outwards at the very end and go back to the initial position without pause',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Tricep Extensions on Cable With Bar', equipment:'Bar, Cable', description:'Grab the Bar, stand with your feet shoulder wide, keep your back straight and lean forward a little. Push the bar down, making sure the elbows dont move during the exercise. Rotate your hands outwards at the very end and go back to the initial position without pause',muscles:'Triceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Wall Pushup', equipment:'None', description:'The diagram shows the most used muscles on this exercise.',muscles:'Triceps Brachii, Anterior Deltoid', category:'Arms'});
            
            Exercise.create({name:'Z Curls', equipment:'Dumbbell', description:'Perform a traditional dumbbell biceps curl, pausing at the top of the motion. Twist your hands until your palms are facing away from your shoulders. In a slow, controlled movement, lower the Dumbbells with your palms facing the ground. At the bottom of the motion, twist your wrists back into the traditional curl grip.',muscles:'Biceps Brachii', category:'Arms'});
            
            Exercise.create({name:'Axe Hold', equipment:'Dumbbell', description:'Grab dumbbells and extend arms to side and hold as long as you can.',muscles:'Anterior Deltoid', category:'Arms'});
            
            Exercise.create({name:'Braced Squat', equipment:'Dumbbell, Weight Plate', description:'Stand with feet slightly wider than shouler-width apart, while standing as tall as you can. Grab a weight plate and hold it out in front of your body with arms straight out.Keep your core tight and stand with a natural arch in your back. Now, push hips back and bend knees down into a squat as far as you can. Hold for a few moments and bring yourself back up to the starting position.',muscles:'Quadriceps Femoris', category:'Legs'});
            
            Exercise.create({name:'Bulgarian Split Squat', equipment:'None', description:'Rest back foot on an elevated surface with sole pointing up. Keep your weight over your front left as you lower yourself.',muscles:'Quadriceps Femoris', category:'Legs'});
            
            Exercise.create({name:'Dumbbell Goblet Squat', equipment:'Dumbbell', description:'Grasp dumbbell with both hands at the sides of the upper plates. Hold dumbbell in front of chest, close to torso. Place feet about shoulderwide apart, keep knees slightly bent. Squat down until thighs are parallel to floor. Keep back straight, bend and move hids backward to keep knees above feet. Return, keep knees slightly flexed. Repeat.',muscles:'Quadriceps Femoris', category:'Legs'});
            
            Exercise.create({name:'Dumbbell Lunges Walking', equipment:'Dumbbell', description:'Take two dumbbells in your hands, stand straight, feet about shoulder wide. Take one long step so that the front knee is approximately forming a right angle. The back leg is streched, the knee is low but doesnt touch the ground.',muscles:'Quadriceps Femoris', category:'Legs'});
            
            Exercise.create({name:'High Knee Jumps', equipment:'None', description:'Start with legs slightly wide than shoulder width. Drop into a bodyweight squat. As you hit the bottom of the squat, explode upwards into a jump while simultaneously tucking your knees into your chest midflight. Remain tucked until apex of your jump',muscles:'Quadriceps Femoris, Biceps Femoris', category:'Legs'});
            
            Exercise.create({name:'Leg Curls(laying)', equipment:'Bench', description:'Lay on a bench and put your calves behind the leg holder. Hold a grip on the bars to make sure the body is firmly in place. Bend your legs bringing the weight up, go slowly back.',muscles:'Biceps Femoris', category:'Legs'});
            
             Exercise.create({name:'Pistol Squat', equipment:'None', description:'One legged squat.',muscles:'Biceps Femoris, Gluteus Maximus', category:'Legs'});
            
            Exercise.create({name:'Run', equipment:'None, Treadmill', description:'Run.',muscles:'', category:'Legs'});
            
             Exercise.create({name:'Squat Jumps', equipment:'None', description:'Jump wide, the close.',muscles:'', category:'Legs'});
            
            Exercise.create({name:'Squats', equipment:'Barbell', description:'Make sure you have put the barbell at a height where you can comfortably take it out and put it back in. Go slowly down, till your thighs are parallel with the floor, not lower. The knees point outwards, your butt, out. Make a small pause of 1 second and with as much energy as you can, push the weight up. Make a pause 2 seconds and repeat',muscles:'Quadriceps Femoris', category:'Legs'});
            
            Exercise.create({name:'Barbell Ab Rollout', equipment:'Barbell', description:'Place a barbell on the floor at your feet. Bending at the waist, grip the barbell with a shoulder with overhand grip. With a slow controlled motion, rool the bar out so that your back is straight. Roll back up raising your hips and butt as you return to the starting position.',muscles:'Obliquus Externus', category:'Abs'});
            
             Exercise.create({name:'Bear Walk', equipment:'None', description:'Rest your weight on your palms and the balls of your feet, not dissimilar to normal pushup position. Move by stepping with your right Palm and left foot, then your left palm and right foot. Move as fast as you can.',muscles:'Anterior deltoid', category:'Chest'});
            
            Exercise.create({name:'Ben Over Rowing', equipment:'Barbell', description:'Grab the barbell with a wide grip and lean forward. Your upper body is not quite parallel to the floor, but forms a slight angle. The chests out during the whole exercise.',muscles:'Latissimus Dorsi', category:'Back'});
            
            Exercise.create({name:'Bent High Pulls', equipment:'Dumbbell', description:'Bend over slightly while holding two dumbbells. Pull the dumbbells up to your chest, keeping your elbows as high as you can.',muscles:'Trapezius', category:'Shoulders'});
            
            Exercise.create({name:'Calf Press using Leg Press Machine', equipment:'Leg Press Machine', description:'Put the balls of your feet on an extended leg press pad. Use your calves to press the weight by flexing your feet/toes into a pointed position, and releasing back into a relaxed position. ',muscles:'Gastrocnemius', category:'Calves'});
        }
    });
}

