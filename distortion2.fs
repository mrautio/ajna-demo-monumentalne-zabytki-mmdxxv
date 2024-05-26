in vec2 texCoord;
out vec4 fragColor;
uniform vec4 color;// = vec4(1,1,1,1);

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float time; // = 1.0;
uniform float mixShift; // = 0.0;


void main()
{
    float timeMultiplier = 0.0002;
    vec2 texCoord = texCoord.st;
    fragColor = mix(texture(texture0,texCoord.st), texture(texture1,texCoord.st), vec4(mixShift)) * color;
    return;
}

