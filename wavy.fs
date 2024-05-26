in vec2 texCoord;
out vec4 fragColor;
uniform sampler2D texture0;
uniform vec4 color; //= vec4(1);
uniform float time; //= 1.0;

void main()
{
    vec2 coord=texCoord;
    coord.s += (sin(coord.t*8. + time*1.)*0.022)*(coord.t-0.5);
    coord.t += (cos(coord.s*50. + time*1.)*0.025)*(coord.t-0.5);
    vec4 color1 = color;
    if (coord.s < 0.) {
        color1.a = 0.;
    } else if (coord.s >= 1.) {
        color1.a = 0.;
    }

    fragColor = texture2D(texture0, coord) * color1;
}
