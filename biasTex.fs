in vec2 texCoord;
out vec4 fragColor;
uniform sampler2D texture0;
uniform vec4 color; // = vec4(1);
uniform float time; // = 1.0;
uniform float textureBias; // = 0.0;

void main()
{
    vec2 coord=texCoord;

    fragColor = texture2D(texture0, coord, textureBias) * color;
}
