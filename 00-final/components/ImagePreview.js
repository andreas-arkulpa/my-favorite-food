import React from 'react';
import {StyleSheet, Image} from 'react-native';

const imagePreviewStyles = StyleSheet.create({image: {width: '100%', height: 200, resizeMode: 'cover'}});

const ImagePreview = (props) => <Image style={imagePreviewStyles.image} source={props.source} />;

export default ImagePreview;
