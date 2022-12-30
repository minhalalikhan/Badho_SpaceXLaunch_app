
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';
export default function () {


    const spacex_query = gql`
    query launches {
  launches {
  
    launch_success
    launch_year
    launch_site {
      site_name_long
    }
    mission_name
    rocket {
      rocket_name
    }
  }
}
    `;

    const { data, loading, error } = useQuery(spacex_query);




    return (
        <View style={styles.container}>
            <Text style={styles.TitleText}>SpaceX Launch List</Text>
            {loading && <Text >Loading</Text>}
            {error && <Text >ERROR</Text>}

            <View style={styles.listcontainer}>
                <ScrollView
                    contentContainerStyle={{ minWidth: '100%', marginBottom: 40, alignItems: 'center' }}>
                    {data && data.launches.map((launch_item, index) => {

                        return (<View style={styles.launchitem} key={index}>
                            <Text style={styles.ItemHeading}>{launch_item.mission_name}{"\n"}</Text>

                            <Text>Rocket : {launch_item.rocket.rocket_name}</Text>
                            <Text>Launch year : {launch_item.launch_year}</Text>
                            <Text>Launch Site : {launch_item.launch_site.site_name_long}{"\n"}</Text>
                            <Text style={[styles.missionsuccess, { color: launch_item.launch_success ? 'green' : 'red' }]}> {launch_item.launch_success ? 'Mission Successful' : 'Mission Unsuccessful'}</Text>

                        </View>)
                    })}
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        alignItems: 'center',


    },
    TitleText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 15,
    },
    listcontainer: {
        flex: 1,
        justifyContent: 'center',

        alignItems: 'center',
        width: '100%',
        padding: 0,
        margin: 0,

    },
    launchitem: {
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 10,
        width: '90%',
        minWidth: '90%',
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 10,
    },
    ItemHeading: {
        fontWeight: 'bold',
        fontSize: 15
    },
    missionsuccess: {
        fontStyle: 'italic',
        fontSize: 10,
    }
});
