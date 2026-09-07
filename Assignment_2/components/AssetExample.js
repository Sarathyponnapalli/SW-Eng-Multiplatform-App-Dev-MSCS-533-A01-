import { Text, View, StyleSheet, Image } from 'react-native';

// The code below will display my BioSketch @ UC, and it's amazing!!!!!
export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        WELCOME TO THE UNIVERSITY of the CUMBERLANDS{"\n"}Course ID: MSCS 533
      </Text>
      <Image style={styles.logo} source={require('../assets/profile.jpg')} />
      <Text style={styles.bio}>
        Parthasarathi Ponnapalli{"\n"}
        Embedded & GPU Software Engineer{"\n\n"}
        I am an Embedded & GPU Software Engineer with 3 years of experience spanning
        automotive SIL/HIL infrastructure, GPU-accelerated computing, and embedded
        vision systems. I am currently Lead SIL Engineer on a Command for Hauling (CFH)
        Drive-by-Wire autonomous vehicle program at Caterpillar, and previously worked
        across three John Deere vehicle platforms simultaneously.{"\n\n"}
        I am pursuing my M.S. in Computer Science at the University of the Cumberlands,
        building on an M.S. in Electrical Engineering from the University of Houston and
        a B.E. in Electronics & Communication Engineering from Anna University, India.{"\n\n"}
        My technical interests include CUDA/GPU computing, embedded systems, computer
        vision, and CI/CD automation for automotive SIL/HIL platforms.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#e60026',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  logo: {
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  bio: {
    marginTop: 16,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'left',
    color: '#ffffff',
  },
});
