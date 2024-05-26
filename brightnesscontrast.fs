in vec2 texCoord;
out vec4 fragColor;

uniform sampler2D texture0;
uniform float contrast = 1.0;
uniform float brightness = 1.0;
uniform float extraBrightness = 1.0;
uniform float mixShift = 0.0;

void main() 
{
   	vec2 coord = texCoord.xy;
   
	vec4 colors = texture(texture0,coord);
	colors.rgb /= colors.a;
	  colors.rgb += brightness+extraBrightness; 
	colors.rgb = clamp(((colors.rgb - 0.5) * max(contrast + 1.0, 0.0)) + 0.5, vec3(0.,0.,0.), vec3(1.,1.,1.));
	
	colors.rgb *= colors.a;

	fragColor = mix(colors, texture(texture0,coord), vec4(mixShift));
}
