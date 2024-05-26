in vec2 texCoord;
out vec4 fragColor;
uniform sampler2D texture0;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform vec4 color; // = vec4(1);
uniform float time; // = 1.0;
uniform float animSpeed; // = 1.0;

void main()
{
    float textureBias = 0.0;
    vec2 coord=texCoord;

    vec4 bird1 = texture2D(texture0, coord, textureBias);
    vec4 bird2 = texture2D(texture1, coord, textureBias);
    vec4 bird3 = texture2D(texture2, coord, textureBias);

    float timePos = mod(time * animSpeed, 3.0);
    if (timePos < 1.0) {
        fragColor = mix(bird1, bird2, timePos) * color;
    } else if (timePos < 2.0) {
        fragColor = mix(bird2, bird3, timePos-1.0) * color;
    } else {
        fragColor = mix(bird3, bird1, timePos-2.0) * color;
    }

}
