
var fontName = "arial_bold.ttf";
var videos = true;


Demo.prototype.preInitFeatherFade = function(start, duration, layer) {
    var feathers = 150;

    for(var i = 0; i < feathers; i++) {
        var fadeDelay = 1.0;
        var featherDuration = duration*i/feathers;
        this.loader.addAnimation([
        {
             "start":start, "duration": featherDuration
            ,"layer": layer
            ,"image": "feather.png"
            ,"color": [{"a":255},{"duration":featherDuration-fadeDelay},{"duration":fadeDelay,"a":0}]
            ,"position":[{"x":getScreenWidth()*Math.random(),"y":getScreenHeight()*Math.random()}]
            ,"scale":[{"uniform2d":0.2+Math.random()*0.2}]
            ,"angle":[{"degreesZ":Math.random()*360}]
        }]);
    }
}

Demo.prototype.preInitClock = function(start, duration, layer) {
    this.loader.addAnimation(
    {
         "start": start, "duration": duration, "layer": layer
        ,"object": "clock.obj"
        ,"scale":[{"uniform3d":1.0}]
        ,"position":[{"x":-0.03,"y":0.0,"z":-0.0}]
        //,"color":[{"r":0,"g":0,"b":0,"a":255}]
        ,"nodes": {
            // minute hand
             "Cube": {
                "angle":[{"degreesZ":()=> 354}]
            }
            // hour hand
            ,"Cube.001": {
                "angle":[{"degreesZ":()=> 241}]
            }
            // second hand
            ,"Cube.002": {
                "angle":[{"degreesZ":()=> getSceneTimeFromStart()*60*8}]
            }
        }
    });

    /*if (videos) {
        this.loader.addAnimation({
             "start": start, "duration":25
            ,"layer": layer, "image": {"name":"eye_03.mp4", "video":{"speed":.9} }
            ,"scale":[{"x":3.5,"y":3.5}]
            ,"color":[{"a":120}]
        });
    }*/
}

Demo.prototype.preInitTitle = function(start, duration, layer) {
    this.loader.addAnimation([
    {
         "start":start, "duration": duration
        ,"layer": layer, "text":{"name":fontName,"string":"Monumentalne Zabytki"}
        ,"scale": [{"uniform2d":3},{"duration":5,"uniform2d":2.25}]
        ,"color":[{"r":0,"g":0,"b":0,"a":0},{"duration":5,"a":255},{"duration":2},{"duration":2,"a":0}]
        ,"position":[{"x":getScreenWidth()/2,"y":getScreenHeight()/2}]
    }]);
    this.loader.addAnimation([
    {
         "start":start, "duration": duration
        ,"layer": layer, "text":{"name":fontName,"string":"MMDXXV"}
        ,"scale": [{"uniform2d":6}]
        ,"color":[{"r":0,"g":0,"b":0,"a":0},{"duration":5.0},{"duration":5,"a":255},{"duration":2},{"duration":2,"a":0}]
        ,"position":[{"x":getScreenWidth()/2,"y":getScreenHeight()/2}]
    }]);
}

Demo.prototype.preInitLake = function(start, duration, layer) {
    this.loader.addAnimation ({
    "start": start, "duration": duration
    ,"layer": layer
    ,"fbo":{"name":"fbolake","action":"begin"}
    });

    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "lake_background.png"
    });
    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "lake_background2.png"
    });
    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "lake_water.png"
        ,"shader":{"name":"wavy.fs"}
    });
    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "lake_branches.png"
    });

    this.loader.addAnimation ({
    "start": start, "duration": duration
    ,"layer": layer,"fbo":{"name":"fbolake","action":"unbind"}
    });
    this.loader.addAnimation ({
         "start": start, "duration": duration
        ,"image": "fbolake.color.fbo"
        ,"layer": layer+1
        ,"color":[{"a":0},{"duration":1,"a":255},{"duration":duration-2},{"duration":1,"a":0}]
    });


}


Demo.prototype.preInitForest = function(start, duration, layer) {
    /*this.loader.addAnimation ({
    "start": start, "duration": duration
    ,"layer": layer
    ,"fbo":{"name":"fboforest","action":"begin"}
    });*/

    var flyDuration = 35;
    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "bird01.png"
        ,"scale":[{"uniform2d":0.12}]
        ,"color":[{"a":255}]
        ,"position":[
             {"x":getScreenWidth()/2,"y":getScreenHeight()/2}
            ,{"duration":flyDuration,"y":getScreenHeight()*1.5}
        ]
        ,"shader":{"name":"wavy.fs"}
    });
    for (var i = 1; i < 10; i++) {
        var y1 = getScreenHeight()/2-50*i+Math.random()*14-7;
        this.loader.addAnimation({
             "start": start, "duration":duration
            ,"layer": layer, "image": "bird01.png"
            ,"scale":[{"uniform2d":0.12}]
            ,"color":[{"a":255}]
            ,"position":[
                 {"x":getScreenWidth()/2-45*i+Math.random()*14-7,"y":y1}
                ,{"duration":flyDuration,"y":y1+getScreenHeight()}
            ]
            ,"shader":{"name":"wavy.fs"}
        });
        var y2 = getScreenHeight()/2-50*i+Math.random()*14-7;
        this.loader.addAnimation({
             "start": start, "duration":duration
            ,"layer": layer, "image": "bird01.png"
            ,"scale":[{"uniform2d":0.12}]
            ,"color":[{"a":255}]
            ,"position":[
                {"x":getScreenWidth()/2+45*i+Math.random()*14-7,"y":y2}
                ,{"duration":flyDuration,"y":y2+getScreenHeight()}
            ]
            ,"shader":{"name":"wavy.fs"}
        });

    }

    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "forest.png"
    });

    this.preInitFeatherFade(start, 10, layer);
    this.preInitTitle(start, duration, layer);

    /*this.loader.addAnimation ({
    "start": start, "duration": duration
    ,"layer": layer,"fbo":{"name":"fboforest","action":"unbind"}
    });
    this.loader.addAnimation ({
         "start": start, "duration": duration
        ,"image": "fboforest.color.fbo"
        ,"layer": layer+1
        ,"color":[{"a":0},{"duration":1,"a":255},{"duration":duration-2},{"duration":1,"a":0}]
    });*/

}

var biasValue = 4.2;
var biasValue2 = 0.0;
function calcBias() {
    var time = getSceneTimeFromStart();
    if (time > 63) {
        biasValue = 4.2*Utils.clamp((1.0-(time-63)/2.), 0.0, 1.0);
        biasValue2 = 3.0*Utils.clamp(((time-63)/2.), 0.0, 1.0);
    }
}
Demo.prototype.preInitWireBirds = function(start, duration, layer) {
    this.loader.addAnimation ({
    "start": start, "duration": duration
    ,"layer": layer
    ,"fbo":{"name":"fbowirebirds","action":"begin"}
    });

    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "city_skyline.png"
        ,"scale":[{"uniform2d":1.5}]
        ,"position":[
             {"x":getScreenWidth()*0.5,"y":getScreenHeight()*0.7}
            ,{"duration":duration, "y":getScreenHeight()*0.65}
        ]
        ,"shader":{"name":"biasTex.fs"
            ,"variable":[
                 {"name":"textureBias","value":[()=> biasValue]}
            ]
        }
        ,"runFunction":()=>calcBias()

    });
    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "wire_empty.png"
        ,"shader":{"name":"biasTex.fs"
            ,"variable":[
                 {"name":"textureBias","value":[()=> biasValue2]}
            ]
        }
    });
    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "wire_birds.png"
        ,"shader":{"name":"biasTex.fs"
            ,"variable":[
                 {"name":"textureBias","value":[0]}
            ]
        }
        ,"color":[{},{"duration":3},{"duration":1,"a":0}]
    });
    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "wire_birds02.png"
        ,"shader":{"name":"biasTex.fs"
            ,"variable":[
                 {"name":"textureBias","value":[0]}
            ]
        }
        ,"color":[{},{"duration":8},{"duration":1,"a":0}]
    });
    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "wire_birds03.png"
        ,"shader":{"name":"biasTex.fs"
            ,"variable":[
                 {"name":"textureBias","value":[0]}
            ]
        }
        ,"color":[{},{"duration":11.5},{"duration":1,"a":0}]
    });


    this.loader.addAnimation ({
    "start": start, "duration": duration
    ,"layer": layer,"fbo":{"name":"fbowirebirds","action":"unbind"}
    });
    this.loader.addAnimation ({
         "start": start, "duration": duration
        ,"image": "fbowirebirds.color.fbo"
        ,"layer": layer+1
        ,"color":[{"a":0},{"duration":1,"a":255},{"duration":duration-2},{"duration":1,"a":0}]
    });
}

function shiftRandomizer() {
    var r = Math.random();

    var time = getSceneTimeFromStart();
    if (time < 93) {
        r = 0;
    } else {
        var p = Utils.clamp((time-93)/3.,0.0,1.0);
        r *= p;

        if (p > 0.999) {
            r = p;
        }
    }


    return r;
}
Demo.prototype.preInitThemVultures = function(start, duration, layer) {
    this.loader.addAnimation ({
    "start": start, "duration": duration
    ,"layer": layer
    ,"fbo":{"name":"fbofly2","action":"begin"}
    });

    this.loader.addAnimation([
    {
         "start": start, "duration": duration, "layer": layer
        ,"image": "clouds_01.png"
        ,"scale": [{"uniform2d":1.1}]
        //,"color": [{"a":0},{"duration":TICK,"a":60},{"duration":durationTime-FADE-TICK},{"duration":FADE,"a":0}]
        ,"shader":{
             "name":"cloudscroll.fs"
            ,"variable":[
                 {"name":"direction","value":[-1,1]}
                 ,{"name":"speed","value":[0.01,0.005]}
                 ,{"name":"textureBias","value":[2]}
            ]
         }
    }]);

    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"scale": [{"uniform2d":0.5}]
        ,"layer": layer, "image": ["plane_bottom01.png","plane_bottom01.png"]
        ,"angle":[{"degreesZ":33}]
        /*,"shader":{"name":"fly.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[0.6]}
            ]}*/
    });

    for(var i = 0; i < 4; i++) {
        this.loader.addAnimation({
             "start": start+i*5, "duration": duration, "layer": layer
            ,"object": "dabomb0.obj"
            ,"scale":[{"uniform3d":0.2},{"duration":20,"uniform3d":0.4}]
            ,"position":[{"z":-10.0,"y":3},{"duration":20, "y":-11.5}]
            ,"angle":[{"degreesZ":70}]
            ,"shader":{"name":["plain.fs","plain.vs"]}
        });
    }



    this.loader.addAnimation ({
    "start": start, "duration": duration
    ,"layer": layer,"fbo":{"name":"fbofly2","action":"unbind"}
    });
    /*this.loader.addAnimation ({
         "start": start, "duration": duration
        ,"image": "fbofly.color.fbo"
        ,"layer": layer+1
        ,"color":[{"a":0},{"duration":1,"a":255},{"duration":duration-2},{"duration":1,"a":0}]
    });*/

    this.loader.addAnimation ({
    "start": start, "duration": duration
    ,"layer": layer
    ,"fbo":{"name":"fbofly","action":"begin"}
    });

    this.loader.addAnimation([
    {
         "start": start, "duration": duration, "layer": layer
        ,"image": "clouds_01.png"
        ,"scale": [{"uniform2d":1.1}]
        //,"color": [{"a":0},{"duration":TICK,"a":60},{"duration":durationTime-FADE-TICK},{"duration":FADE,"a":0}]
        ,"shader":{
             "name":"cloudscroll.fs"
            ,"variable":[
                 {"name":"direction","value":[-1,1]}
                 ,{"name":"speed","value":[0.01,0.005]}
                 ,{"name":"textureBias","value":[2]}
            ]
         }
    }]);


    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"scale": [{"uniform2d":0.8}]
        ,"layer": layer, "image": ["bird_fly_01.png","bird_fly_02.png","bird_fly_03.png"]
        ,"shader":{"name":"fly.fs"
            ,"variable":[
                 {"name":"animSpeed","value":[0.6]}
            ]}
    });

    for(var i = 0; i < 4; i++) {
        this.loader.addAnimation([
        {
             "start":start+i*5+Math.random()*2, "duration": duration
            ,"layer": layer
            ,"image": "feather.png"
            ,"color": [{"r":0,"g":0,"b":0,"a":0},{"duration":2,"a":220}]
            ,"position":[
                 {"x":()=> getScreenWidth()*0.5+Math.sin(getSceneTimeFromStart())*30,"y":getScreenHeight()*(0.48+Math.random()*0.02)}
                ,{"duration":20, "y":-getScreenHeight()*0.2+Math.random()*0.05}
            ]
            ,"scale":[{"uniform2d":0.03+Math.random()*0.02-0.01},{"duration":20,"uniform2d":0.10+Math.random()*0.02-0.01}]
            ,"angle":[{"degreesZ":()=> 115-Math.sin(getSceneTimeFromStart())*(10)}]
        }]);
    }

    this.loader.addAnimation ({
    "start": start, "duration": duration
    ,"layer": layer,"fbo":{"name":"fbofly","action":"unbind"}
    });
    /*this.loader.addAnimation ({
         "start": start, "duration": duration
        ,"image": "fbofly.color.fbo"
        ,"layer": layer+1
        ,"color":[{"a":0},{"duration":1,"a":255},{"duration":duration-2},{"duration":1,"a":0}]
    });*/

    this.loader.addAnimation ([
    {
         "start": start, "duration": duration
        ,"image": ["fbofly.color.fbo","fbofly2.color.fbo"]
        ,"layer": layer+1
        ,"color":[{"a":0},{"duration":1,"a":255},{"duration":duration}]
        ,"shader":{"name":"distortion2.fs",
            "variable":[
                 {"name":"mixShift","value":[()=> shiftRandomizer()]}
            ]
            }
        }]);


}

Demo.prototype.preInitEnd = function(start, duration, layer) {
    this.loader.addAnimation({
         "start": start, "duration":duration
        ,"layer": layer, "image": "ruins01.png"
        //,"position":[{"x":"{ return getScreenWidth()/2+(Math.sin(getSceneTimeFromStart()*0.2)*700-350); }","y":"{ return getScreenHeight()/2; }"}]
        ,"scale":[{"uniform2d":5},{"duration":duration,"uniform2d":30}]
    });

    this.loader.addAnimation({
         "start": start+2, "duration":0.5
        ,"layer": layer, "image": "ruins02.png"
    });

    this.loader.addAnimation({
         "start": start+4.5, "duration":0.5
        ,"layer": layer, "image": "ruins03.png"
    });

    this.loader.addAnimation({
         "start": start+7, "duration":0.5
        ,"layer": layer, "image": "ruins04.png"
    });

    if (videos) {
        this.loader.addAnimation({
             "start": start+duration-3, "duration":3
            ,"layer": layer, "image": {"name":"blast.mp4", "video":{"speed":1.5} }
            ,"scale":[{"x":5.0,"y":4.0}]
            ,"color":[{"a":255}]
       });
    }

}

Demo.prototype.init = function() {
    const settings = new Settings();
    settings.demo.compatibility.old2dCoordinates = true; // when true 2d coordinates x: 0 - 1920, y: 0 - 1080; when false 2d coordinates are -0.5 - 0.5 range
    settings.demo.compatibility.oldColors = true; // when true colors are in 0-255 range, when false colors are in 0-1 range
    settings.demo.camera = {
		type: 'Perspective',
		fov: 75,
		// aspectRatio calculated below
		near: 0.1,
		far: 1000,
		position: { x: 0.0, y: 0.0, z: 0.0 },
		lookAt: { x: 0.0, y: 0.0, z: -1.0 },
		up: { x: 0.0, y: 1.0, z: 0.0 }
	};
    settings.demo.lights = [
    {
      type: 'Ambient',
      color: { r: 1.0, g: 1.0, b: 1.0 },
      intensity: 10.0,
    }/*,
    {
      type: 'Directional',
      castShadow: false,
      color: { r: 1.0, g: 1.0, b: 1.0 },
      intensity: 1.0,
      position: { x: 0.0, y: 1.0, z: 2.0 },
    },*/
  ];

	var start = 0;
	var layer = 1;
	var duration = 108;

    this.loader.addAnimation({
        "start": start, "duration": duration, "layer": layer+1
        ,"image": "_embedded/defaultWhite.png"
        ,"color":[{"r":0.82*255,"g":0.75*255,"b":0.75*255,"a":255}]
    });

    this.preInitForest(start, 29.5, layer+1);

    this.preInitLake(29.0, 20.0, layer);

    this.preInitWireBirds(48, 20.5, layer);

    this.preInitThemVultures(67.5, 29.0, layer);

    //this.preInitClock(start, duration, layer);
    this.preInitEnd(96.5, 11.5, layer+1);

    this.loader.addAnimation(
    {
         "start": start, "duration": duration, "layer": layer
        ,"image": "old_layer.png"
        ,"color":[{"a":110}]
    });
    this.loader.addAnimation(
    {
         "start": start, "duration": duration, "layer": 60000
        ,"image": "vignette.png"
    });

    this.distortion(0,200,1,50000,50002);

}

Demo.prototype.distortion = function(startTime, duration, startLayer, endLayer, layer)
{
    this.loader.addAnimation ([
    {
    "start": startTime, "duration": duration
    ,"layer": startLayer
    ,"fbo":{"name":"fbodist","action":"begin"}
    },
    {
    "start": startTime, "duration": duration
    ,"layer": endLayer,"fbo":{"name":"fbodist","action":"unbind"}
    }
    ]);
    this.loader.addAnimation ([
    {
         "start": startTime, "duration": 96.5
        ,"image": ["fbodist.color.fbo","spectogram.png"]
        ,"layer": layer
        ,"shader":{"name":"distortion.fs",
            "variable":[
                 {"name":"timeMultiplier","value":[0.1]}
                ,{"name":"pixelSize","value":[()=> 0.05-Math.random()*1,0.03]}
                ,{"name":"noiseWaveSpeed","value":[10]}
                ,{"name":"noiseWaveSize","value":[10000]}
                ,{"name":"noiseLuminance","value":[1]}
                ,{"name":"noiseAlpha","value":[0.2]}
                ,{"name":"colorComponentDistortionX","value":[()=> -0.02*Math.random(),0.00,0.00,0.00]}
                ,{"name":"colorComponentDistortionY","value":[()=> -0.02*Math.random(),0.00,0.00,0.00]}
            ]
            }
        }]);
        
    this.loader.addAnimation ([
    {
         "start": 96.5, "duration": duration
        ,"image": ["fbodist.color.fbo","spectogram.png"]
        ,"layer": layer
        ,"shader":{"name":"distortion.fs",
            "variable":[
                 {"name":"timeMultiplier","value":[300.0]}
                ,{"name":"pixelSize","value":[()=> 0.2-Math.random()*0.3,0.03]}
                ,{"name":"noiseWaveSpeed","value":[10]}
                ,{"name":"noiseWaveSize","value":[10000]}
                ,{"name":"noiseLuminance","value":[1]}
                ,{"name":"noiseAlpha","value":[0.6]}
                ,{"name":"colorComponentDistortionX","value":[()=> -0.1*Math.random(),0.01,0.01,0.01]}
                ,{"name":"colorComponentDistortionY","value":[()=> -0.1*Math.random(),0.01,0.01,0.01]}
            ]
            }
        }]);
}


