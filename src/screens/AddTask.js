import React, { Component } from 'react'
import { 
    Modal,
    View,
    StyleSheet,
    TouchableNativeFeedback
 } from 'react-native'

 export default class AddTask extends Component {
     render() {
         return (
             <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>
                 <TouchableNativeFeedback
                    onPress={this.props.onCancel}>
                     <View style={styles.background}>

                     </View>
                 </TouchableNativeFeedback>
             </Modal>
         )
     }
 }

 const styles = StyleSheet.create({
     background:{
         flex:1,
         backgroundColor: 'rgba(0, 0, 0, 0.7)'
     }
 })