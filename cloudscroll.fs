in vec2 texCoord;
out vec4 fragColor;
uniform sampler2D texture0;
uniform vec4 color; // = vec4(1,1,1,1);
uniform float time; // = 1.0;
uniform float textureBias; // = 0.0;
uniform vec2 direction; // = vec2(1,-1);
uniform vec2 speed; // = vec2(0.55,0.35);

void main() {
    fragColor = color;
    vec2 texc = texCoord;
    texc.s = mod(direction.x*texCoord.s+time*speed.x,1.0);
    texc.t = mod(direction.y*texCoord.t+time*speed.y,1.0);
    fragColor *= texture(texture0, texc, textureBias);
}
