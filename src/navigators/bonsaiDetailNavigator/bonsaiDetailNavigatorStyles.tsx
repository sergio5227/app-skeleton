import { StyleSheet } from "react-native";

const bonsaiDetailNavigatorStyles = StyleSheet.create({
  tabContainer: {
    height:55,
    paddingHorizontal:10,
    paddingTop:20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "#fff",
    width:'100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },

  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin:0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  iconWrapper: {
    borderRadius: 100,
    marginTop:15
  },

  iconWrapperActive: {
    backgroundColor: "#3470f2ff",
    elevation: 30,
    shadowColor: "#3470f2ff",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 100,
    transform: [{ translateY: -15 }],
  },

  label: {
    position:'relative',
    bottom:15,
    fontSize: 13,
    color: '#fff',
    fontWeight:'400',
    marginBottom:30, 
    height:20
  }
});


export default bonsaiDetailNavigatorStyles